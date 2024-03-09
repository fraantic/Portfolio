"use client"

import React, { useState, useEffect, useRef, use } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { UpdateTimer } from "./lib/graphql/mutation";
import { getTimerQuery } from "@/app/lib/graphql/query";
import "./Home.scss";

const Home = () => {

  // REGULAR STUFF
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [buttonClick, setIsButtonClick] = useState(false);
  const [timestring, setTimeString] = useState("");

  // GRAPHQL STUFF
  const { loading, error, data } = useQuery(getTimerQuery);
  const [updateTimer] = useMutation(UpdateTimer);


  // GETTING CLOCK DATA AND SETTING IT
  useEffect(() => {
    if (loading == false) {
      let currenttimer = data.timer[0].timeSince
      const d = new Date(); const milsince1970 = d.getTime();
      const useabletime = milsince1970-1710000000000
      console.log(useabletime - currenttimer)
      setTime((useabletime - currenttimer)/1000)
      setIsRunning(true)
    }
  }, [loading, data]);  

  // ADDING TIME TO CLOCK ON CLIENT SIDE
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      
      intervalId = setInterval(() => {
        setTime(time + 1)
        
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  useEffect(() => {
    var sec_num = Math.ceil(time)
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours}
    if (minutes < 10) {minutes = "0"+minutes}
    if (seconds < 10) {seconds = "0"+seconds}
    setTimeString(`${hours} : ${minutes} : ${seconds}`)
  })
  

  // RESET TIMER
  const reset = () => {
    const d = new Date();
    const milsince1970 = d.getTime();
    const useabletime = milsince1970 - 1710000000000
    console.log(useabletime)
    updateTimer({
      variables: {
        timeSince: useabletime,
      },
    })
    setIsButtonClick(false);
  };
  
  // BUTTON CLICK LOGIC
  const buttonClickOn = () => {
    setIsButtonClick(true);
  };
  const buttonClickOff = () => {
    setIsButtonClick(false);
  };

  if (error) return <p>Error</p>;
  return (
    <div className="website-container">
      <p className="title-text">The Streak</p>

      <div className="stopwatch-container">
        {loading ? (
          "loading"
        ) : (
        <p className="stopwatch-time">
          {timestring}
        </p>
        )}
        <div className="stopwatch-buttons">
          {!buttonClick ? (
            <button class="button-24" onClick={buttonClickOn} >RESET</button>
          ) : (
            <div className="button-container">
              <button class="button-24"  onClick={buttonClickOff} >CANCEL</button>
              <button class="button-24"  onClick={reset} >CONFIRM</button>
            </div>
          ) }
        </div>
      </div>
    </div>
  );
};

export default Home;

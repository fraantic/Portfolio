'use client'

import React, { useEffect }from "react";
import Image from "next/image";
import Reveal from "../Reveal/Reveal";
import { Desktop, Mobile } from '@/utils/mobilepc'
import LandingImage from '/public/landingImage.png'
import './Header.scss'

const Header = () => {

  useEffect(() => {

    // set size of thing
    var r = document.querySelector(':root');
    r.style.setProperty('--card-size', `${window.screen.width}px`);
    
      
    // animate thing
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@([{}";

    const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
          randomString = length => Array.from(Array(length)).map(randomChar).join("");

    const card = document.querySelector(".wrapper");
    const letters = card.querySelector(".card-letters");

    const handleOnMove = e => {
      const rect = wrapper.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

      letters.style.setProperty("--x", `${x}px`);
      letters.style.setProperty("--y", `${y}px`);

      letters.innerText = randomString(20000);    
    }

    card.onmousemove = e => handleOnMove(e);

    card.ontouchmove = e => handleOnMove(e.touches[0]);
  }, [])

  if ('undefined' != typeof screen) {
    let width = screen.width; 
  }

  return (
    <div id="wrapper" class="wrapper">
      <div className="content">
        <div className="text-container">
          <Reveal>
            <h1 className="header-title">Hi, i&apos;m Damien<p className="no-margin">.</p></h1>
          </Reveal>
          
          <Reveal delay2={0.1}>
          <h2 className="header-name"><p className="no-margin"> Full Stack Web Developer</p> & <p className="no-margin">Software Engineer</p></h2> 
          </Reveal>
        </div>
        <Desktop>
         <Image src={LandingImage} alt="An image that shows my face to display who I am" quality={50}/>
        </Desktop>
      </div>
      <div className="track-container">
      <div class="card-track">
        <div class="card-wrapper">
          <div class="card">
            <div class="card-gradient"></div>
            <div class="card-letters"></div>
          </div>
        </div>
      </div>
    </div>

    </div>
    
  );
};

export default Header;
import React from "react";
import Reveal from "../Reveal/Revealbox";
import './Experience.scss'
import { Desktop, Mobile } from '@/utils/mobilepc'

const Experience = () => {
  return (
    <div id="experience" className="experience-container-top">
      <div className="experience-container-bottom">

        <div className="header-container">
          <Reveal>
            <h1 className="About-title">Experience<p className="About-dot">.</p></h1>
          </Reveal>
          <Desktop>
            <div className="about-line"/>
          </Desktop>
        </div>
      
        <div className="experience-container-list">
          {lists.map((list) => (
            <Experienceitem list={list} key={list.id} /> 
          ))}
        </div>

      </div>
      
    </div>
  );
};

const Experienceitem = ({ list }) => {
  return (
    <div className="experience-item-container">

      <div className="experience-item-header">
       
        <div className="experience-item-title">
          <Reveal>
            <p className="experience-item-job-title">{list.job}</p>
          </Reveal>
          <Reveal>
            <p className="experience-item-date-range">{list.time}</p>
          </Reveal>
          
        </div>
        <div className="experience-item-date">
          <Reveal>
            <p className="experience-item-company-name">{list.pos}</p>
          </Reveal>
          <Reveal>
            <p className="experience-item-location">{list.loc}</p>
          </Reveal>
        </div>
      </div>

      <div className="experience-item-description">
        <Reveal>
          <p className="experience-item-description-text">{list.des}</p>
        </Reveal>
      </div>

      <div className="experience-item-techstack">
        

        {list.techstack.map((tech,index) => (
            <Reveal key={index}>
              <p className="experience-item-techstack-item" >{tech}</p>
            </Reveal>
          ))}

        
      </div>
      <div className="experience-line"/>
    </div>
  )
}

export default Experience;

const lists = [
  {
    job: "Lizard Global",
    pos: "Full Stack Web Developer",
    des: "I helped build and maintain the company's website, as well as develop new features and functionality. I also worked on a team of developers to build a new employee managment platform for the company.",
    time: "2023 - Present",
    loc: "Kuala Lumpur",
    techstack: ["JavaScript","TypeScript","ReactJS","NextJS","ExpressJS","MongoDB","Apollo GraphQL","HTML","CSS","Git"],
    id: 1
  },
  {
    job: "RVLVR Asia Sdn Bhd ",
    pos: "Freelancer",
    des: "I helped add advertising fucntionality to a game in a advertising campaign",
    time: "2023 - Present",
    loc: "Kuala Lumpur",
    techstack: ["JavaScript","TypeScript","NextJS","HTML","CSS"],
    id: 1
  }
]
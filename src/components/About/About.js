import React from "react";
import Reveal from "../Reveal/Revealbox";
import Image from "next/image";

import prof from '/public/proffesional.svg'
import cas from '/public/casual.svg'
import { Desktop, Mobile } from '@/utils/mobilepc'

import './About.scss'

const About = () => {
  return (
    <div id="about" className="about-container-top">
      <div className="about-container-bottom">

        <div className="header-container">
          <Reveal>
            <h1 className="About-title">About<p className="About-dot">.</p></h1>
          </Reveal>
          <Desktop>
            <div className="about-line"/>
            <Reveal>
              <h2 className="About-title">SkillSet<p className="About-dot">.</p></h2>
            </Reveal>
          </Desktop>
        </div>

        <div className="about-content-container">
          <div className="about-description">
            <Reveal>
            <p className="about-description-text">I am a versatile fullstack web developer and software engineer with a passion for crafting innovative digital solutions. With a strong foundation in TypeScript, JavaScript, HTML, CSS, and Python, I specialize in building dynamic and responsive websites, robust backend systems, and engaging mobile applications.</p>
            </Reveal>
            <div className="about-line"/>
            <Reveal>
            <p className="about-description-text">My expertise extends to a variety of frameworks and technologies, including the React framework, Next.js, Apollo GraphQL, and Express.js. Whether it&apos;s creating intuitive user interfaces, optimizing backend performance, or developing seamless mobile experiences, I have the skills and experience to bring your ideas to life.</p>
            </Reveal>
            <div className="about-line"/>
            <Reveal>
            <p className="about-description-text">I thrive in fast-paced environments and enjoy collaborating with teams to deliver high-quality solutions that meet and exceed expectations. With a keen eye for detail and a commitment to continuous learning, I am always exploring new technologies and best practices to stay at the forefront of the ever-evolving tech landscape.</p>
            </Reveal>
          </div>

          <div className="about-techstack">
            <Mobile>
              <Reveal>
                <h2 className="About-title">SkillSet<p className="About-dot">.</p></h2>
              </Reveal>
            </Mobile>
            <Reveal>
            <div className="about-skilled">
              <div className="techstack-header-title">
                <Image src={prof} width={30}/>
                <p className="techstack-title">Professionally</p>
              </div>
              <div className="teckstack-list">
                <p className="teckstack-item">JavaScript</p>
                <p className="teckstack-item">TypeScript</p>
                <p className="teckstack-item">Python</p>
                <p className="teckstack-item">HTML</p>
                <p className="teckstack-item">CSS</p>
                <p className="teckstack-item">SCSS</p>
                <p className="teckstack-item">NodeJs</p>
                <p className="teckstack-item">ReactJS</p>
                <p className="teckstack-item">React Native</p>
                <p className="teckstack-item">NextJS</p>
                <p className="teckstack-item">GraphQL</p>
                <p className="teckstack-item">ExpressJs</p>
                <p className="teckstack-item">MongoDB</p>
                <p className="teckstack-item">GitHub</p>
                <p className="teckstack-item">+ More</p>
              </div>
            </div>
            </Reveal>

            <Reveal>
            <div className="about-beginner">
              <div className="techstack-header-title">
                <Image src={cas} width={30}/>
                <p className="techstack-title">Casually</p>
              </div>
                <div className="teckstack-list">
                  <p className="teckstack-item">Lua</p>
                  <p className="teckstack-item">WordPress</p>
                  <p className="teckstack-item">PostgreSQL</p>
                  <p className="teckstack-item">Google Cloud</p>
                  <p className="teckstack-item">Vercel</p>
                  <p className="teckstack-item">Electron</p>
                  <p className="teckstack-item">Tailwind</p>
                  <p className="teckstack-item">Java</p>
                  <p className="teckstack-item">C++</p>
                </div>
            </div>
            </Reveal>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
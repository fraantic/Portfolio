import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal/RevealSlide";

import github from '/public/github.svg'
import LinkedIn from '/public/LinkedIn.svg'

import { Desktop, Mobile } from '@/utils/mobilepc'
import './Nav.scss'

const Nav = () => {

  
  return (
      <div className="Navi">
        <div className="Left-Navi">

          <Reveal>
            <h1 className="navi-icon">D<p className="dot-emphasis">.</p></h1>
          </Reveal>
          <Reveal>
            <Link href='https://github.com/fraantic'>
              <Image className="NaviSvgImage" src={github} alt="A link to my github page" width={24} height={24}/>
            </Link>
          </Reveal>
          
          <Reveal delay1={0.1}>
            <Link href='https://www.linkedin.com/in/damien-w-9248532b2/'>
              <Image className="NaviSvgImage" src={LinkedIn} alt="A link to my linkedin page" width={24} height={24}/>
            </Link>
          </Reveal>
          
        </div>
        <Desktop>
          <div className="Right-Navi">
            
            <Reveal>
              <Link className="Navi-link-text" href="#wrapper">Home</Link>
            </Reveal>

            <Reveal delay1={0.1}>
              <Link className="Navi-link-text" href="#about">About</Link>
            </Reveal>
            
            <Reveal delay1={0.2}>
              <Link className="Navi-link-text" href="#projects">Projects</Link>
            </Reveal>
            
            <Reveal delay1={0.3}>
              <Link className="Navi-link-text" href="#experience">Experience</Link>
            </Reveal>
    
            <Reveal delay1={0.4}>
              <Link className="Navi-link-text" href="#contact">Contact</Link>
            </Reveal>
            
          </div>
        </Desktop>
      </div>
    
  );
};

export default Nav;
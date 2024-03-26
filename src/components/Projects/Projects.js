import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";;
import Link from "next/link";
import Reveal from "../Reveal/Revealbox";

import './Projects.scss'

const carousel = () => {
  return (
    <div id="projects" className="horizontal-scroll-container">
      
      <HorizontalScrollCarousel />
    </div>
      
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", `-55%`]);

  return (
    <section ref={targetRef} className="horizontal-scroll-carousel-container">
      <div className="horizontal-scroll-carousel-motion-div-container">
        <motion.div style={{ x }} className="horizontal-scroll-carousel-motion-div">

            {cards.map((card, index) => {
              if (index === 0) {
                return (
                <div key={index}>
                    <h1 className="projects-title">Projects<p className="golden-dot">.</p></h1>
                    <div className="first-card">
                      <Card card={card} key={card.id} />  
                    </div>
                  
                </div>
                )
              }
              return  <Card card={card} key={card.id} /> 
            })}
          
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div key={card.id} className={`card-container ${!isOpen && "closed-card"}`}>
    {!isOpen ? (
      <div onClick={() => setIsOpen(true)} >
        <Image src={card.url} width={960} height={478} className="card-image" alt="hi" quality={50}/>
        <div className="card-text-container">
          <p className="card-text">
            {card.title}
          </p>
        </div>
      </div>
    ) : (
      <AnimatePresence onClick={() => setIsOpen(false)}>
        <Image src={card.url} width={960} height={478} className="card-image" alt="hi" quality={50} style={{ filter:"blur(5px)"}}/>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="modal-container-upper"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={() => setIsOpen(false)}
            className="modal-container-lower"
            
          >
            <div className="card-otherside-container">
              <div className="left-card-container">
                <div className="card-description-container">
                  <h2 className="description-title">Description<p className="golden-dot">:</p></h2>
                  <p className="description-text">
                    {card.description}
                  </p>
                </div>
                <div className="card-employer-container">
                  <h3 className="employer-title">Employer<p className="golden-dot">:</p></h3>
                  <p className="employer-text">
                    &nbsp;{card.employer}
                  </p>
                
                </div>
              </div>
              <div className="right-card-container">
                <div className="card-seo-container">
                  <h4 className="preformance-title" >SEO Preformance<p className="golden-dot">:</p></h4>
                  <Image src={card.seo} width={380} height={125} alt="hi" quality={100} className="seo-image"/>
                </div>
                <div className="card-techstack-container">
                  <h5 className="techstack-title" >TechStack<p className="golden-dot">:</p></h5>
                  <div className="techstack-list-container">
                    {card.techstack.map((tech, index) => {
                      return <p key={index} className="techstack-text">{tech}</p>
                    })}
                  </div>
                </div>
                <div className="card-link-container">
                  <h6 className="link-title">Link<p className="golden-dot">:</p></h6>
                  <Link href={card.link} target="_blank" rel="noopener noreferrer" className="link-text">
                    <p className="link-text">{card.displaylink}</p>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
    </AnimatePresence>
    )}
    </div>
    </>
    
  );
};
export default carousel;

const cards = [
  {
    url: "https://res.cloudinary.com/dgsoem6f7/image/upload/v1710476317/lizardwebsite_u4xjrj.png",
    title: "Lizard Global",
    description: "test",
    employer:"Lizard Global",
    seo: "https://res.cloudinary.com/dgsoem6f7/image/upload/v1710652990/seolizardglobal_t7f2to.jpg",
    techstack: ["JavaScript","NextJS","ReactJS","NodeJS","RestApi","Sass","Html","Strapi","Vercel","Firebase","Pipeline"],
    displaylink: "Lizard.Global",
    link: "https://www.lizard.global/",
    id: 1,
  },
  {
    url: "https://res.cloudinary.com/dgsoem6f7/image/upload/v1710476310/knoopowebsite_dfeirc.png",
    title: "Knoopo Website",
    description: "test",
    employer:"Self",
    seo: "https://res.cloudinary.com/dgsoem6f7/image/upload/v1710652990/knooposeo_wkbo2o.jpg",
    techstack: ["JavaScript","TypeScript","NextJS","ReactJs","NodeJS","RestApi","MongoDB","Vercel","framer-motion","Sass","Html"],
    displaylink: "Knoopo.vercel.app",
    link: "https://knoopo.vercel.app/",
    id: 2,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Portfolio",
    description: "test",
    employer:"Self",
    seo: "https://res.cloudinary.com/dgsoem6f7/image/upload/v1710652990/knooposeo_wkbo2o.jpg",
    techstack: ["JavaScript","TypeScript","NextJS","ReactJS","NodeJS","framer-motion","Vercel","Sass","Html"],
    displaylink: "This Website",
    link: "",
    id: 3,
  },
  {
    
    url: "https://res.cloudinary.com/dgsoem6f7/image/upload/v1710477562/streak_cauo7m.png",
    title: "Streak",
    description: "test",
    employer:"Self",
    seo: "https://res.cloudinary.com/dgsoem6f7/image/upload/v1710657932/streakseo_lnuxwc.jpg",
    techstack: ["JavaScript","TypeScript","NextJS","NodeJS","Apollo Graphql","ExpressJS","ReactJS","Vercel","PostgreSQL","Sass","Html"],
    displaylink: "PRIVATE",
    link: "",
    id: 4,
  },
];
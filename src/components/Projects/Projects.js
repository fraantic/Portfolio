import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";;
import Link from "next/link";
import Reveal from "../Reveal/Revealbox";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


import './Projects.scss'
import { Desktop, Mobile } from "@/utils/mobilepc";

const carousel = () => {
  return (
    <div id="projects" className="horizontal-scroll-container">
      
      <HorizontalScrollCarousel />
    </div>
      
  );
};

const HorizontalScrollCarousel = () => {
  return (
    <section className="horizontal-scroll-carousel-container">
      <div className="project-title-container">
        <h1 className="projects-title">Projects<p className="golden-dot">.</p></h1>
        <Desktop>
        <div className="projects-line"/>
        </Desktop>
      </div>
      <Desktop>
        <Swiper
          slidesPerView={1}
          spaceBetween={100}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {cards.map((card, index) => {
                return (
                <SwiperSlide key={index} >
                  <Card card={card} key={card.id} />
                </SwiperSlide>
              ) 
            })}

        </Swiper>

      </Desktop>
      <Mobile>
        <Swiper
          slidesPerView={1}
          spaceBetween={500}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {cards.map((card, index) => {
                return (
                <SwiperSlide key={index} >
                  <Card card={card} key={card.id} />
                </SwiperSlide>
              ) 
            })}

        </Swiper>

      </Mobile>
    </section>
  );
};

const Card = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div key={card.id} className={`card-container ${!isOpen && "closed-card"}`}>
    {!isOpen ? (
      <>
        <Desktop>
          <div onClick={() => setIsOpen(true)} >
          <Image src={card.url} width={960} height={478} className="card-image" alt="hi" quality={50}/>
          <div className="card-text-container">
            <p className="card-text">
              {card.title}
            </p>
          </div>
        </div>
        </Desktop>

        <Mobile>
          <div onClick={() => setIsOpen(false)} >
          <Image src={card.url} width={960} height={478} className="card-image" alt="hi" quality={50}/>
          <div className="card-text-container">
            <p className="card-text">
              {card.title}
            </p>
          </div>
        </div>
        </Mobile>
      </>
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
    description: "I worked on this website for a bit over a year whilst working for lizard global. I've done various backend and frontend tasks. from simple color changes to rewriting many major parts of the website such as the reccomendation alogrithm for articles when browsing them. I couldn't get the seo score as high as I wanted because the company wouldnt approve me spending too much time on it.",
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
    description: "This is a website I built for a friend to showcase his portoflio and achivements in a game, it uses a backend and a custom headless cms so he can easily add his texture packs to the list. I also displayed my advanced knowledge of css to design a button in the top right corner that mimmics 3d motion with only 2d shapes.",
    employer:"Self",
    seo: "https://res.cloudinary.com/dgsoem6f7/image/upload/v1710652990/knooposeo_wkbo2o.jpg",
    techstack: ["JavaScript","TypeScript","NextJS","ReactJs","NodeJS","RestApi","MongoDB","Vercel","framer-motion","Sass","Html"],
    displaylink: "Knoopo.vercel.app",
    link: "https://knoopo.vercel.app/",
    id: 2,
  },
  {
    url: "https://res.cloudinary.com/dgsoem6f7/image/upload/v1729497330/Screenshot_2024-10-21_155440_cer82d.png",
    title: "Portfolio",
    description: "This website is the current website you are seeing it displays my advanced knowledge and capabilities to use css to make an adaptive layout whilst keeping a more advanced design intact with various moving componenets. This website also includes a serverless server to send emails to me when, u can see the form below.",
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
    description: "This is just a simple website that I challanged my self to use as much technologies as possible, simply just to over engineer. It has a very simple backend that it uses to keep track of the time on the timer so its consistant amoungst all clients. It does this by getting the exact time of when the button was clicked and storing it, when a user opens the website they communitcate to the backend to get the time the timer was reset and subtract the current time from the rest to find how long the timer has been going.",
    employer:"Self",
    seo: "https://res.cloudinary.com/dgsoem6f7/image/upload/v1710657932/streakseo_lnuxwc.jpg",
    techstack: ["JavaScript","TypeScript","NextJS","NodeJS","Apollo Graphql","ExpressJS","ReactJS","Vercel","PostgreSQL","Sass","Html"],
    displaylink: "PRIVATE",
    link: "",
    id: 4,
  },
];
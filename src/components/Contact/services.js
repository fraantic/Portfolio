
`use client`
import React, { useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Reveal from "../Reveal/Revealbox";
import Image from "next/image";
import Link from "next/link";
import Contact from './contact'

import './Contact.scss'
import { Desktop } from "@/utils/mobilepc";

const Services = () => {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  console.log(show)

  return (
    <div id="contact" className="contact-container">
      <div className="contact-container-lower">
        <div className="contact-header">
          <Reveal>
            <h1 className="contact-title">Services<p className="About-dot">.</p></h1>
          </Reveal>
          <Desktop>
            <div className="contact-line"/>
          </Desktop>
        </div>
        <div className="card-container-outer">
          {data.map((data, index) => {
            return (
              <TiltCard data={data} handleShow={handleShow} key={index} />
          )})}
        </div>
        
      </div>

      <Modal show={show} onHide={handleClose} dialogClassName="modal">
        <div className="modal-bg" >
          <div className="modal-click-close" onClick={handleClose} />
          <div className="modal-fg" >
            <div className="modal-header">
              <h1 className="modal-title">Contact<p className="About-dot">.</p></h1>
              <div className="modal-line"/>
              <div className="close-btn" onClick={handleClose}/>
            </div>
            <div className="modal-quick-contact">
              <p>Hey if you prefer a quicker method of contact <Link href="whatsapp://send?text=Hello World!&phone=+60128312007">Ping me on WhatsApp</Link> or <Link href = "mailto: weissmanndamien@gmail.com">Send me an Email</Link> otherwise please fill out this form</p>
            </div>
            <div>
              <Contact/>
            </div>
          </div>
        </div>
      </Modal>
      
    </div>
  )
}

const ROTATION_RANGE = 35.5;
const HALF_ROTATION_RANGE = 20;

const TiltCard = ({data, handleShow}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="card-container"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="card-container-bottom"
      >
        <div style={{ transform: "translateZ(50px)"  }} className="card-content-container" >
          <Reveal>
            <Image width={230} height={100} src={data.img} alt={data.altTag} className="card-img"/>
          </Reveal>
          <Reveal>
            <h2 className="card-title">{data.title}</h2>
          </Reveal>
          <Reveal>
            <p className="card-desc">{data.desc}</p>
          </Reveal>

          <button className="buy-btn" onClick={() => handleShow()}><Reveal><p className="contact-btn-text">Contact</p></Reveal><p className="About-dot">.</p></button>
        </div>
      </div>
    </motion.div>
  );
};
export default Services;

const data = [
  {
    img: "https://res.cloudinary.com/dgsoem6f7/image/upload/v1710912938/Untitled_1_qxbkzo.png",
    altTag: "asdf",
    title: "E-Commerce Website",
    desc: "I will build an e-commerce website using a platform of your choice",
  },
  {
    img: "https://res.cloudinary.com/dgsoem6f7/image/upload/v1710913041/image_2_nfjjlp.png",
    altTag: "asdf",
    title: "Custom Codded Website",
    desc: "I will build a fully custom codded website that is fully responsive, secure, and optimised for speed and SEO",
  },
  {
    img: "https://assets-global.website-files.com/6411daab15c8848a5e4e0153/641b3f9ce3cdde01161582b2_629712455650ab2e848fe8c4_logo-wordpress.png",
    altTag: "asdf",
    title: "Wordpress Website",
    desc: "I will build a Professional Wordpress Website according to your desgins and needs",
  },
]
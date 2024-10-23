"use client"

import React  from "react";

import Header from "@/components/Header/Header";
import SpinText from '@/components/SliderText/SpinText'
import Nav from '@/components/Nav/Nav'
import About from '@/components/About/About'
import Projects from '@/components/Projects/Projects'
import Experience from '@/components/Experience/Experience'
import Services from '@/components/Contact/services'


import "./Home.scss";

const Page = () => {
  return (
    <div>
      <Nav />
      <Header />
      <SpinText />
      <About />
      <Projects />
      <Experience />
      <Services />
      <div className="fade-ending"/>
    </div>
  );
};

export default Page;
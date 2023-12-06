"use client"

import React from 'react'
import '@/app/globals.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Header = () => {

  ScrollTrigger.create({
    animation: gsap.from(".logo", {
      y: "50vh",
      scale: 6,
      yPercent: -50,
    }),
    scrub: true,
    trigger: ".content",
    start: "top bottom",
    endTrigger: ".content",
    end: "top center",
  });

  return (
    <div>
      <div className="nav">
      <div className="items-left">
        <a href="#">services</a>
        <a href="#">rooms</a>
      </div>
      <div className="items-right">
        <a href="#">booking</a>
        <a href="#">contact</a>
      </div>
    </div>
    <div className="logo-container">
      <h1 className="logo">TOTEC</h1>
    </div>
    </div>
  )
}

export default Header
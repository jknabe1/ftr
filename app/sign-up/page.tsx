"use client"


import React, { useEffect } from 'react';
import gsap from 'gsap';
import '@/app/globals.css';

const App: React.FC = () => {
  useEffect(() => {
    gsap.from(".hero-image-wrapper, .content-wrapper, .front-img", 2, {
      delay: 1,
      clipPath: "inset(0 100% 0 0)",
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
      },
    });

    gsap.from("img", 3, {
      delay: 1.5,
      scale: 2,
      ease: "power4.inOut",
      stagger: {
        amount: 0.25,
      },
    });

    gsap.to(
      "header h1, header h2",
      1,
      {
        delay: 3,
        top: 0,
        ease: "power3.out",
        stagger: {
          amount: 0.2,
        },
      },
    );
  }, []);

  return (
    <div className="container">
      <div className="hero-image-wrapper wrapper">
        <div className="bg-img">
          <img src="./hero.jpg" alt="" />
        </div>
        <div className="front-img">
          <img src="./hero.jpg" alt="" />
        </div>
      </div>
      <div className="content-wrapper wrapper">
        <nav>
          <p>Don't forget to check our socials! <a href="#">@cocoladas</a></p>
          <button>Close</button>
        </nav>
        <header>
          <div className="h2">
            <h2>subscribe</h2>
            <div className="header-revealer"></div>
          </div>
          <div className="h1">
            <h1>to get access</h1>
            <div className="header-revealer"></div>
          </div>
          <div className="form-wrapper">
            <form action="">
              <input type="text" placeholder="your email" />
              <button>subscribe</button>
            </form>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              dicta minus amet magnam rem fugit facere explicabo. Hic, culpa
              sint.
            </p>
          </div>
        </header>
        <footer>
          <p>Welcome to the <span>club</span></p>
        </footer>
      </div>
    </div>
  );
};

export default App;
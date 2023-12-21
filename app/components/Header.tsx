"use client"

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import '@/app/globals.css'

const Header: React.FC = () => {
  useEffect(() => {
    let tl = gsap.timeline({ paused: true });

    tl.to(".menu-overlay", {
      duration: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power2.out",
    });

    tl.from(
      ".menu-link, .btn",
      {
        opacity: 0,
        y: 60,
        stagger: 0.05,
        duration: 0.75,
        ease: "power1.inOut",
      },
      "<",
    );

    tl.to(
      ".video-preview",
      {
        duration: 1,
        height: "200px",
        ease: "power2.out",
      },
      "<",
    );

    tl.to(
      ".menu-divider",
      {
        duration: 2,
        width: "100%",
        ease: "power4.out",
      },
      "<",
    );

    const openMenu = () => {
      const menuOverlay = document.querySelector(".menu-overlay") as HTMLElement;
      menuOverlay.style.pointerEvents = "all";
      tl.play();
    }

    const closeMenu = () => {
      const menuOverlay = document.querySelector(".menu-overlay") as HTMLElement;
      menuOverlay.style.pointerEvents = "none";
      tl.reverse();
    }

    const menuOpenBtn = document.querySelector(".menu-open-btn");
    menuOpenBtn?.addEventListener("click", openMenu);

    const menuCloseBtn = document.querySelector(".menu-close-btn");
    menuCloseBtn?.addEventListener("click", closeMenu);

    tl.reverse();

    // Cleanup function
    return () => {
      menuOpenBtn?.removeEventListener("click", openMenu);
      menuCloseBtn?.removeEventListener("click", closeMenu);
    }
  }, []);

  return (
    <div>
      <nav className='border-y-4 border-black'>
        <div className="logo">Impulse</div>
        <div className="menu-open-btn">Menu</div>
      </nav>
      <div className="menu-overlay">
        <div className="menu-nav">
          <div className="menu-logo">Impulse</div>
          <div className="menu-close-btn">Close</div>
        </div>
        <div className="menu-cols">
          <div className="col">
            <div className="video">
              <div className="video-preview"></div>
              <div className="video-details">
                <p>
                  <i className="ph-fill ph-play-circle"></i>
                  Play reel
                </p>
                <p>-01:18</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="menu-link">
              <a href="#">Home</a>
            </div>
            <div className="menu-link">
              <a href="#">Workplace</a>
            </div>
            <div className="menu-link">
              <a href="#">Services & Models</a>
            </div>
            <div className="menu-link">
              <a href="#">Our Story</a>
            </div>
            <div className="menu-link">
              <a href="#">Contact</a>
            </div>
            <div className="btn">
              <a href="#">Take a seat</a>
            </div>
          </div>
        </div>
        <div className="menu-footer">
          <div className="menu-divider"></div>
          <div className="menu-footer-copy">
            <div className="slogan"><p>s Brands, Today.™</p></div>
            <div className="socials">
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
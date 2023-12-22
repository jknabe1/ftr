"use client"

import '@/app/globals.css'
import React from 'react'
import Image from 'next/image';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


export default function Slider() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
      spacing: 15,
    },
  })
  return (
    <div ref={ref} className="keen-slider border-b-4 border-black">
      <div className="keen-slider__slide number-slide1 border-r-4 border-black">1</div>
      <div className="keen-slider__slide number-slide2 border-r-4 border-black">2</div>
      <div className="keen-slider__slide number-slide3 border-r-4 border-black">3</div>
      <div className="keen-slider__slide number-slide4 border-r-4 border-black">4</div>
      <div className="keen-slider__slide number-slide5 border-r-4 border-black">5</div>
      <div className="keen-slider__slide number-slide6 border-l-4 border-black">6</div>
    </div>
  )
}


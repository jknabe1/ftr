"use client"

import React from 'react'
import Image from 'next/image'

const Carousel = () => {
  return (
    <div className='border-y-4 dark:border-white border-black'>
      <div className="keen-slider h-full w-full overflow: hidden pt-12">
  <div style={{width: '100%', height: '100%', position: 'relative'}} className="keen-slider__slide number-slide1">
    <Image src="https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2023/02/RCA-Home-13-4-1024x593.jpg" alt="{artist.name}" width={1920 } height={1080} priority/>
  </div>
  <div className="keen-slider__slide number-slide2">
    <Image src="https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2023/02/RCA-Home-14-2-1024x593.jpg" alt="2" width={1920} height={1080}/>
  </div>
  <div className="keen-slider__slide number-slide3">
    <Image src="https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2023/02/RCA-Home-15-1-1024x593.jpg" alt="3" width={1920} height={1080}/>
  </div>
  </div>
  </div>
  )
}

export default Carousel
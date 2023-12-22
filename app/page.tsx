import React from 'react'
import LatestPost from './components/landing/LatestPost'
import MagCard from './components/MagCard'
import { FeaturedPost } from './components/landing/FeaturedPost'
import Slider from './components/landing/Slider'

const page = () => {
  return (
    <div>
      <FeaturedPost/>
      <LatestPost/>
      <Slider/>
      <MagCard/>  
    </div>
  )
}

export default page
import React from 'react'
import LatestPost from './components/landing/LatestPost'
import MagCard from './components/MagCard'
import { FeaturedPost } from './components/landing/FeaturedPost'

const page = () => {
  return (
    <div>
      <FeaturedPost/>
      <LatestPost/>
      <MagCard/>  
    </div>
  )
}

export default page
import React from 'react'
import Hero from '../../components/elements/Hero'
import About from '../../components/important/About'
import WhoWeAre from '../../components/important/WhoWeAre'
import GalleryHome from '../../components/elements/GalleryHome'

function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <WhoWeAre/>
      <GalleryHome/>
    </div>
  )
}

export default Home
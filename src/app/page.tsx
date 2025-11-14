import React from 'react'
import HeroSection from "@/components/HeroSection"
import Projects from '@/components/Projects'
import AboutMe from "@/components/AboutMe"
function Home() {
  return (
    <div>
      <div className='w-full'></div>
      <HeroSection/>
      <Projects/>
      <AboutMe/>
    </div>
  )
}

export default Home

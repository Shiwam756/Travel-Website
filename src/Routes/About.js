import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Background2 from '../Assets/background3.jpeg'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'


function About() {
  return (
    <>
    <Navbar/>
    
<Hero
cName="hero-mid"
heroImg={Background2}
title="About"

/>
<AboutUs/>
<Footer/>
    </>
  )
}

export default About

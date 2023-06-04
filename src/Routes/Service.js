import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Background3 from '../Assets/service.jpg'
import Footer from '../Components/Footer'
import Trip from '../Components/Trip'


function Service() {
  return (
    <>
    <Navbar/>
    <Hero
cName="hero-mid"
heroImg={Background3}
title="Service"

/>
<Trip/>
<Footer/>
    </>
  )
}

export default Service

import React from 'react'
import '../Components/Herostyles.css';
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Background1 from '../Assets/background2.jpg';
import Destination from '../Components/Destination';
import Trip from '../Components/Trip';
import Footer from '../Components/Footer';


function Home() {
  return (
   <>
   <Navbar/>
<Hero
cName="hero"
heroImg={Background1}
title="Your Journey Your Story"
text="Choose Your Favourite Destination"
btnText="Travel Plan"
url="/"
btnClass="show"
/>
<Destination/>
<Trip/>
<Footer/>
   </>
  )
}

export default Home

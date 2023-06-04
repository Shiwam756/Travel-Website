import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Background4 from '../Assets/contact.jpg'
import Footer from '../Components/Footer'
import ContactForm from '../Components/ContactForm'


function Contact() {
  return (
    <>
    <Navbar/>
    <Hero
cName="hero-mid"
heroImg={Background4}
title="Contact"

/>
<ContactForm/>
<Footer/>
    </>
  )
}

export default Contact

import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Routes/Home'
import About from './Routes/About'
import Service from './Routes/Service'
import Contact from './Routes/Contact'

function App() {
  return (
    <>
  <div className='app'>
    <Routes>
   
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
    </Routes>
    
  </div>
    </>
  )
}

export default App

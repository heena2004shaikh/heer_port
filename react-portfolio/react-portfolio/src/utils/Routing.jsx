import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import Experience from '../components/Experience/Experience'
import Portfolio from '../components/Portfolio/Portfolio'
import Contact from '../components/Contact/Contact'
import Resume from '../components/Resume/Resume'

const Routing = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/experience" element={<Experience />}/>
    <Route path="/Resume" element={<Resume />}/>
    <Route path="/portfolio" element={<Portfolio />}/>
    <Route path="/contact" element={<Contact />}/>
    
  </Routes>
  )
}

export default Routing
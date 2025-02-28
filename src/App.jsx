import React from 'react'
import Navbar from "./component/Navbar"
import HeroSection from './component/HeroSection'
import About from "./component/About"
import Services from "./component/Services"
import Contact from "./component/Contact"
import Portfolio from "./component/Portfolio"
import Footer from "./component/Footer"

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Portfolio />
      <Contact/>
      <Footer />
    </div>
  )
}

export default App


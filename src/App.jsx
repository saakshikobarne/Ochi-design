import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Play from './components/Play'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full text-white min-h-screen bg-zinc-100'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Play/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
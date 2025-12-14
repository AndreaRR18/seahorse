import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import Schedule from './components/sections/Schedule'
import Contact from './components/sections/Contact'
import Location from './components/sections/Location'
import FloatingActionButton from './components/ui/FloatingActionButton'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Schedule />
        <Contact />
        <Location />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  )
}

export default App

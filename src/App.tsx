import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Training from './components/sections/Training';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import Schedule from './components/sections/Schedule';
import Contact from './components/sections/Contact';
import Location from './components/sections/Location';
import FloatingActionButton from './components/ui/FloatingActionButton';
import './App.css';

/**
 * Main App component - Root component of the application
 * Renders the complete page structure with header, sections, and footer
 * @returns React component for the entire application
 */
const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Training />
        <Services />
        <Gallery />
        <Testimonials />
        <Schedule />
        <Contact />
        <Location />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default App;

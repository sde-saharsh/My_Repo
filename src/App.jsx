import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Accordion from './components/Accordion';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='min-h-screen bg-[#BFD1D7] dark:bg-gray-900 text-black dark:text-white transition-colors duration-500'>
      <Navbar />
      <Hero />
      <Accordion/>
      <Footer/>
    </div>
  );
}

export default App;

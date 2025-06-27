import React from 'react';
import Hero from './components/Hero';
import Accordion from './components/Accordion';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='min-h-screen bg-[#BFD1D7] text-black dark:text-white transition-colors duration-500'>
      <Hero />
      <Accordion/>
      <Footer/>
    </div>
  );
}

export default App;

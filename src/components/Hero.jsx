import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayedName, setDisplayedName] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullName = "RAYNER LIVANO KALYANA";

  useEffect(() => {
    let index = 0;
    
    const typeWriter = () => {
      if (index < fullName.length) {
        setDisplayedName(fullName.slice(0, index + 1));
        index++;
        setTimeout(typeWriter, 100);
      } else {
        setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
      }
    };

    const timer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-[#D9D9D9] relative flex items-center justify-center overflow-hidden pt-24 px-10">
      <div className="center-content flex flex-col items-center z-10">
        <h1 className="font-silkscreen text-[#1D2D50] text-5xl mb-10 text-center tracking-wide animate-fade-in-up relative">
          {displayedName}
          {showCursor && <span className="text-[#1D2D50] font-bold">_</span>}
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-24 h-1 bg-[#5BC0BE]"></span>
        </h1>
        
        <div className="w-64 h-96 rounded-2xl mb-8 flex items-center justify-center text-white animate-gentle-shake shadow-2xl bg-gradient-to-br from-gray-400 to-gray-600">
          <span className="text-lg">Your Photo Here</span>
        </div>
      </div>

      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 z-20 animate-fade-in-left">
        <div className="w-96 p-6 rounded-2xl text-left bg-white bg-opacity-80 backdrop-blur-lg shadow-xl">
          <div className="icon inline-block text-5xl font-silkscreen text-[#1D2D50] mb-5">&lt;/&gt;</div>

          <p className="font-schoolbell text-lg text-gray-700 mb-6 leading-relaxed">
            Passionate about crafting polished, intuitive, and data-driven digital experiences that drive results and truly resonate.
          </p>
          <button 
            onClick={scrollToAbout}
            className="bg-[#1D2D50] text-white font-silkscreen px-8 py-4 rounded-full border-none cursor-pointer transition-all duration-300 relative overflow-hidden hover:text-[#1D2D50] hover:-translate-y-1"
          >
            CONTACT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
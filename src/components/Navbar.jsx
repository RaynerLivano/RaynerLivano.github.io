import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Update active states based on scroll position
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-50px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    // Scroll to top button visibility
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <div className="nav-indicator fixed right-8 top-1/2 -translate-y-1/2 z-200 flex flex-col gap-4">
        <div 
          className={`nav-dot w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${activeSection === 'home' ? 'bg-primary scale-130' : 'bg-black/30'}`} 
          data-section="home" 
          data-label="HOME"
          onClick={() => scrollToSection('home')}
        ></div>
        <div 
          className={`nav-dot w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${activeSection === 'services' ? 'bg-primary scale-130' : 'bg-black/30'}`} 
          data-section="services" 
          data-label="SERVICES"
          onClick={() => scrollToSection('services')}
        ></div>
        <div 
          className={`nav-dot w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${activeSection === 'works' ? 'bg-primary scale-130' : 'bg-black/30'}`} 
          data-section="works" 
          data-label="WORKS"
          onClick={() => scrollToSection('works')}
        ></div>
        <div 
          className={`nav-dot w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${activeSection === 'about' ? 'bg-primary scale-130' : 'bg-black/30'}`} 
          data-section="about" 
          data-label="ABOUT"
          onClick={() => scrollToSection('about')}
        ></div>
      </div>

      <div 
        className={`scroll-to-top fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 z-100 ${showScrollTop ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      >
        <i className="fas fa-arrow-up"></i>
      </div>
    </>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide navbar
        setIsVisible(false);
      } 
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 flex justify-between items-center px-10 py-5 bg-[#D9D9D9] backdrop-blur-lg z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="top-left">
        <p className="font-schoolbell text-xl">Application Developer / Full Stack Developer</p>
      </div>
      <nav className="top-right flex gap-5">
        {['HOME', 'SERVICES', 'WORKS', 'ABOUT'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-silkscreen text-black relative text-lg tracking-wide cursor-pointer hover:after:scale-x-100 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:-bottom-1 after:left-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-400 after:ease-in-out"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
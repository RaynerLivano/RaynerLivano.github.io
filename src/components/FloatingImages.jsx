// src/components/FloatingItems.js
import React, { useEffect } from 'react';

const FloatingItems = () => {
  useEffect(() => {
    // Draggable functionality for floating items
    const draggables = document.querySelectorAll('.draggable');
    
    draggables.forEach(elem => {
      let offsetX = 0;
      let offsetY = 0;
      let isDragging = false;

      // Mouse events
      elem.addEventListener('mousedown', (e) => {
        isDragging = true;
        const rect = elem.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        elem.style.zIndex = 1000;
        elem.style.transition = 'none';
      });

      document.addEventListener('mousemove', (e) => {
        if (isDragging) {
          const x = e.clientX - offsetX;
          const y = e.clientY - offsetY;
          elem.style.left = x + 'px';
          elem.style.top = y + 'px';
          elem.style.position = 'fixed';
        }
      });

      document.addEventListener('mouseup', () => {
        if (isDragging) {
          isDragging = false;
          elem.style.transition = 'transform 0.4s ease';
          elem.style.zIndex = '2';
        }
      });

      // Touch events
      elem.addEventListener('touchstart', (e) => {
        isDragging = true;
        const touch = e.touches[0];
        const rect = elem.getBoundingClientRect();
        offsetX = touch.clientX - rect.left;
        offsetY = touch.clientY - rect.top;
        elem.style.zIndex = 1000;
        elem.style.transition = 'none';
      });

      document.addEventListener('touchmove', (e) => {
        if (isDragging) {
          const touch = e.touches[0];
          const x = touch.clientX - offsetX;
          const y = touch.clientY - offsetY;
          elem.style.left = x + 'px';
          elem.style.top = y + 'px';
          elem.style.position = 'fixed';
        }
      });

      document.addEventListener('touchend', () => {
        if (isDragging) {
          isDragging = false;
          elem.style.transition = 'transform 0.4s ease';
          elem.style.zIndex = '2';
        }
      });
    });

    return () => {
      // Clean up event listeners if needed
    };
  }, []);

  return (
    <div className="floating-images absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-1">
      <img 
        src="assets/images/kodak_camera.png" 
        alt="Camera" 
        className="floating-item kodak draggable absolute w-44 left-1/4 top-1/3 -rotate-2 animate-gentle-shake animate-fade-in" 
        style={{ animationDelay: '0.6s' }}
      />
      <img 
        src="assets/images/the_1975_vinyl.png" 
        alt="Vinyl record" 
        className="floating-item vinyl draggable absolute w-52 right-1/4 top-1/3 rotate-2 animate-gentle-shake" 
        style={{ animationDelay: '2s, 0.8s' }}
      />
      <img 
        src="assets/images/redbull_f1.png" 
        alt="Race car" 
        className="floating-item f1 draggable absolute w-64 right-12 bottom-1/5 rotate-1 animate-gentle-shake" 
        style={{ animationDelay: '1s, 1s' }}
      />
    </div>
  );
};

export default FloatingItems;
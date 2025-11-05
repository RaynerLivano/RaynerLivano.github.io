import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Works from './components/Works';
import About from './components/About';
import FloatingImages from './components/FloatingImages';
import BubbleMenu from './components/BubbleMenu';
import Contact from './components/Contact';
import ScrollStack, { ScrollStackItem } from './components/ScrollStack';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'works', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 font-quicksand">
      <Header />
      
      <main>
        <ScrollStack>
          {/* Home Section */}
          <ScrollStackItem>
            <section id="home" className="h-screen">
              <Hero />
              <FloatingImages />
            </section>
          </ScrollStackItem>
          
          {/* Services Section */}
          <ScrollStackItem>
            <section id="services" className="h-screen">
              <Services />
            </section>
          </ScrollStackItem>
          
          {/* Works Section */}
          <ScrollStackItem>
            <section id="works" className="h-screen">
              <Works />
            </section>
          </ScrollStackItem>
          
          {/* About Section */}
          <ScrollStackItem>
            <section id="about" className="h-screen">
              <About />
              <Contact />
            </section>
          </ScrollStackItem>
        </ScrollStack>
      </main>

      <BubbleMenu />
    </div>
  );
}

export default App;
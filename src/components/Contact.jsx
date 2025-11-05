import { motion } from "framer-motion";

const Contact = () => {
  return (
    <footer className="bg-gray-200 py-16 px-10 text-primary font-silkscreen border-t-2 border-primary">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        <div>
          <h3 className="text-xl mb-4 border-b border-primary inline-block pb-1">MENU</h3>
          <ul className="font-quicksand">
            <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
            <li><a href="#works" className="hover:text-secondary transition-colors">Works</a></li>
            <li><a href="#about" className="hover:text-secondary transition-colors">About</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl mb-4 border-b border-primary inline-block pb-1">SOCIALS</h3>
          <ul className="font-quicksand">
            <li><a href="#" className="hover:text-secondary transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">GitHub</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">LeetCode</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl mb-4 border-b border-primary inline-block pb-1">CONTACT</h3>
          <ul className="font-quicksand">
            <li><a href="mailto:rayner@example.com" className="hover:text-secondary transition-colors">rayner@example.com</a></li>
            <li><a href="tel:+1234567890" className="hover:text-secondary transition-colors">+123 456 7890</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl mb-4 border-b border-primary inline-block pb-1">LOCAL TIME</h3>
          <ul className="font-quicksand">
            <li id="local-time">Loading...</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center mt-10">
        <p>&copy; 2023 Rayner Livano Kalyana. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;
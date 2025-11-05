import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", color: "bg-[#1D2D50]" },
  { label: "Services", href: "#services", color: "bg-[#5BC0BE]" },
  { label: "Works", href: "#works", color: "bg-[#1D2D50]" },
  { label: "About", href: "#about", color: "bg-[#5BC0BE]" },
];

export default function BubbleMenu() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        className="p-4 bg-white text-gray-800 rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Bubble Menu Items */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute bottom-16 right-0 flex flex-col items-end space-y-3"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`text-white px-6 py-3 rounded-full shadow-lg ${item.color} font-silkscreen text-sm hover:scale-105 transition-transform duration-200`}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
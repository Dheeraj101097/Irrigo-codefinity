import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Droplets } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <Droplets className="h-8 w-8 text-blue-200" />
          <span className="font-bold text-xl md:text-2xl text-gray-900">
            <span className="text-fuchsia-200">Irrigo</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#features"
            className="font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="font-medium text-gray-600 hover:text-primary transition-colors"
          >
            How It Works
          </a>
          <a
            href="#dashboard"
            className="font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Dashboard
          </a>
          <a
            href="#benefits"
            className="font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Benefits
          </a>
          <a href="#contact" className="btn-primary">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="font-medium text-gray-600 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="font-medium text-gray-600 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              How It Works
            </a>
            <a
              href="#dashboard"
              className="font-medium text-gray-600 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Dashboard
            </a>
            <a
              href="#benefits"
              className="font-medium text-gray-600 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Benefits
            </a>
            <a
              href="#contact"
              className="btn-primary inline-block text-center"
              onClick={toggleMenu}
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

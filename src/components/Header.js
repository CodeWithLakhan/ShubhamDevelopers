import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<header className="relative sticky top-0 z-50 shadow-lg bg-white/90 backdrop-blur">
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Shubham Developers Logo" 
              className="h-20 w-auto pl-10"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-black hover:text-blue-300 font-medium transition drop-shadow-md">
              Home
            </Link>
            <Link to="/about" className="text-black hover:text-blue-300 font-medium transition drop-shadow-md">
              About
            </Link>
            <Link to="/projects" className="text-black hover:text-blue-300 font-medium transition drop-shadow-md">
              Projects
            </Link>
            <Link to="/services" className="text-black hover:text-blue-300 font-medium transition drop-shadow-md">
              Services
            </Link>
            <Link to="/contact" className="text-black hover:text-blue-300 font-medium transition drop-shadow-md">
              Contact Us
            </Link>
            <button className="bg-blue-600 text-black px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-lg">
              Quick Inquiry
            </button>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white border-opacity-20">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-black hover:text-blue-300 font-medium transition" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/about" className="text-black hover:text-blue-300 font-medium transition" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/projects" className="text-black hover:text-blue-300 font-medium transition" onClick={toggleMenu}>
                Projects
              </Link>
              <Link to="/services" className="text-black hover:text-blue-300 font-medium transition" onClick={toggleMenu}>
                Services
              </Link>
              <Link to="/contact" className="text-black hover:text-blue-300 font-medium transition" onClick={toggleMenu}>
                Contact Us
              </Link>
              <button className="bg-blue-600 text-black px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full shadow-lg">
                Quick Inquiry
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;


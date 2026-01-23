import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-background via-accent to-background text-gray-800">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Shubham Developers</h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              An emerging real estate force in Shirpur, Shubham Developers delivers quality-driven projects with a focus on trust, design, and long-term value.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
               <li>
                <Link to="/" className="text-gray-600 hover:text-secondary transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-secondary transition">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 hover:text-secondary transition">Projects</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-secondary transition">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-secondary transition">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-primary">Contact Us</h4>
            <div className="space-y-3 text-gray-600 flex flex-col items-center md:items-start">
              <p>
                Pitreshwar colony, 38A,<br />
                Shirpur, Dist Dhule<br />
                Maharashtra 425405
              </p>
              <p>
                <a href="tel:+919099541414" className="hover:text-secondary transition font-bold">
                  +91 92848 44534
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-accent mt-8 pt-8 text-center text-gray-600 text-sm md:text-base">
          <p>&copy; {new Date().getFullYear()} Shubham Developers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


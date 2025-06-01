import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Code2 } from 'lucide-react';
import { NavLink } from './NavLink';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <span className="text-red-600">N</span>ithin <span className="text-red-600">K</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          
          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/nithink-code" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/nithink-code/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://leetcode.com/u/nithinkokkapuni/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-500 transition-colors"
              aria-label="LeetCode"
            >
              <Code2 size={20} />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-white hover:text-red-500 transition-colors"
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-white hover:text-red-500 transition-colors"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-white hover:text-red-500 transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-white hover:text-red-500 transition-colors"
            >
              Contact
            </a>
            
            {/* Social Icons - Mobile */}
            <div className="flex space-x-6 pt-2">
              <a 
                href="https://github.com/nithink-code" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/nithink-code/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://leetcode.com/u/nithinkokkapuni/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500 transition-colors"
                aria-label="LeetCode"
              >
                <Code2 size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
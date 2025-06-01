import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold text-white mb-4 md:mb-0">
            <span className="text-red-600">N</span>ithin <span className="text-red-600">K</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} Nithin K. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="#about" 
              className="text-gray-400 hover:text-red-500 transition-colors mx-2"
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-gray-400 hover:text-red-500 transition-colors mx-2"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-gray-400 hover:text-red-500 transition-colors mx-2"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-red-500 transition-colors mx-2"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
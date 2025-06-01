import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const roles = ['Full Stack Developer', 'C++ DSA Enthusiast', 'Tech Explorer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    // Type or delete one character at a time
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      }
    }, isDeleting ? 50 : 150);
    
    // Decide whether to delete or move to next word
    if (!isDeleting && displayedText === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
    }
    
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);
  
  const scrollToNextSection = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ff0000_1px,transparent_1px)] bg-[length:40px_40px] opacity-10"></div>
      </div>

      <div 
        className={`container mx-auto px-4 z-10 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="text-red-600">Nithin K</span>
          </h1>
          
          <div className="h-8 mb-8">
            <h2 className="text-xl md:text-2xl text-gray-300">
              <span className="typing-text">{displayedText}</span>
              <span className="inline-block w-1 h-6 bg-red-600 ml-1 animate-blink"></span>
            </h2>
          </div>
          
          <p className="text-gray-400 mb-10 text-lg leading-relaxed">
            Passionate about building elegant solutions to complex problems. 
            I create responsive web applications and solve algorithmic challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors shadow-lg hover:shadow-red-600/20"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-md transition-all shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
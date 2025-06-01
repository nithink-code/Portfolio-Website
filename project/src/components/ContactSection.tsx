import React from 'react';
import { Github, Linkedin, Code2, Mail, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Get In Touch</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-400"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to connect? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-red-500 mr-4 mt-1" size={20} />
                <div>
                  <h4 className="text-white text-lg font-semibold">Email</h4>
                  <a href="mailto:nithinarcade2005@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors">
                    nithinarcade2005@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-red-500 mr-4 mt-1" size={20} />
                <div>
                  <h4 className="text-white text-lg font-semibold">Location</h4>
                  <p className="text-gray-400">Mangalore, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-white text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/nithink-code" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center
                    hover:bg-red-600 transition-colors text-white"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/nithink-code/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center
                    hover:bg-red-600 transition-colors text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://leetcode.com/u/nithinkokkapuni/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center
                    hover:bg-red-600 transition-colors text-white"
                  aria-label="LeetCode"
                >
                  <Code2 size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 
                    text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 
                    text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 
                    text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors 
                  shadow-lg hover:shadow-red-600/20 flex items-center gap-2"
              >
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
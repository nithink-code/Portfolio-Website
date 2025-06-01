import React from 'react';
import SkillCard from './SkillCard';
import { Code, Database, Layout, Terminal, Server, Brain } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const frontendSkills = ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Redux'];
  const backendSkills = ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'GraphQL', 'SQL'];
  const dsaSkills = ['Data Structures', 'Algorithms', 'Problem Solving', 'C++', 'Time Complexity Analysis', 'Space Optimization'];
  
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">My Skills</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-400"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I specialize in full-stack development and C++ data structures & algorithms, 
            with a passion for building efficient and elegant solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard 
            title="Frontend Development" 
            skills={frontendSkills} 
            icon={<Layout className="text-red-500" />}
            delay={0.1}
          />
          
          <SkillCard 
            title="Backend Development" 
            skills={backendSkills} 
            icon={<Server className="text-red-500" />}
            delay={0.3}
          />
          
          <SkillCard 
            title="C++ DSA" 
            skills={dsaSkills} 
            icon={<Brain className="text-red-500" />}
            delay={0.5}
          />
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Technologies I Work With</h3>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 
              'SQL', 'C++', 'Git', 'REST APIs', 'Tailwind CSS', 'Redux'].map((tech, index) => (
              <div 
                key={tech} 
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-red-500 
                  transition-all hover:bg-gray-800/80 hover:text-white hover:shadow-red-500/10 hover:shadow-lg"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
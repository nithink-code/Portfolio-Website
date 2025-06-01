import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div 
      className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden hover:shadow-xl 
        transition-all duration-300 hover:shadow-red-600/10 hover:border-red-500/30 group"
      style={{
        animationDelay: `${index * 0.2}s`
      }}
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white z-20">
          {project.title}
        </h3>
      </div>
      
      <div className="p-6">
        <p className="text-gray-300 mb-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors 
              shadow-lg hover:shadow-red-600/20 flex items-center gap-2"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
          
          <a 
            href={project.codeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors 
              shadow-lg flex items-center gap-2"
          >
            <Github size={16} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
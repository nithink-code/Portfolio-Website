import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Fitness Tracker Website",
      description: "A comprehensive fitness tracking application that helps users monitor their workouts, set goals, and track progress over time.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoUrl: "https://fitness-tracking-website.vercel.app/",
      codeUrl: "https://github.com/nithink-code/Fitness-Tracking-Website"
    },
    {
      title: "Cake Website",
      description: "An e-commerce platform for a bakery business, allowing users to browse, customize, and order cakes for various occasions.",
      technologies: ["React", "Javascript", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoUrl: "https://cake-project-psi.vercel.app/",
      codeUrl: "https://github.com/nithink-code/Cake-Project"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">My Projects</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-400"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent work. Each project represents my commitment to clean code, 
            intuitive user experiences, and solving real-world problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Want to see more of my work? Check out my GitHub repository for additional projects.
          </p>
          <a 
            href="https://github.com/nithink-code" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 
              rounded-md transition-all shadow-lg inline-flex items-center gap-2"
          >
            <span>View More Projects</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
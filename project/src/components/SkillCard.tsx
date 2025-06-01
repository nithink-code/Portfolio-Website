import React, { ReactNode } from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: ReactNode;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon, delay }) => {
  return (
    <div 
      className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg hover:shadow-lg hover:shadow-red-600/10 transition-all 
        duration-300 hover:border-red-500/30 group"
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 mr-4 flex items-center justify-center bg-gray-900 rounded-lg
          group-hover:bg-red-600/10 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li 
            key={index}
            className="flex items-center text-gray-300"
          >
            <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredProjects = filter === 'featured' 
    ? projects.filter(project => project.featured) 
    : projects;
  
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
          プロジェクト
        </h2>
        
        <div className="flex justify-center mb-12" data-aos="fade-up">
          <div className="flex space-x-4">
            <button 
              className={`px-6 py-2 rounded-full ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setFilter('all')}
            >
              すべて
            </button>
            <button 
              className={`px-6 py-2 rounded-full ${filter === 'featured' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setFilter('featured')}
            >
              おすすめ
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
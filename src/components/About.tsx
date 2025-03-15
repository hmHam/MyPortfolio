import React from 'react';
import { About as AboutType } from '../types';

interface AboutProps {
  about: AboutType;
}

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          {about.title}
        </h2>
        
        <div className="flex flex-col md:flex-row items-center" data-aos="fade-up" data-aos-delay="200">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="w-64 h-64 mx-auto rounded-lg overflow-hidden shadow-lg">
              {about.image ? (
                <img 
                  src={about.image.startsWith('/') ? `${process.env.PUBLIC_URL}${about.image}` : `${process.env.PUBLIC_URL}/${about.image}`} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="prose prose-lg max-w-none">
              {about.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
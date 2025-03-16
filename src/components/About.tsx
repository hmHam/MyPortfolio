import React from 'react';
import { About as AboutType } from '../types';

interface AboutProps {
  about: AboutType;
}

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Left column with image */}
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="w-72 h-72 flex items-center justify-center">
              {/* Simple photo frame with even borders */}
              <div className="relative w-64 h-64 bg-white border-8 border-gray-200 shadow-md rounded-sm flex items-center justify-center">
                {/* Photo with even inner margin */}
                <div className="w-full h-full p-2">
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
            </div>
          </div>
          
          {/* Right column with title and text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
              {about.title}
            </h2>
            
            <div className="prose prose-lg max-w-none">
              {about.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 whitespace-pre-line">
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
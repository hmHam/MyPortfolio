import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

interface HeroProps {
  name: string;
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ name, title, description }) => {
  const { socials } = portfolioData;
  
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              こんにちは、<br /> 
              <span className="text-blue-200">{name}</span> です
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-blue-100">
              {title}
            </h2>
            <p className="text-lg mb-8 max-w-lg opacity-90">
              {description}
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
              >
                お問い合わせ
              </a>
              <a 
                href="#projects" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition duration-300"
              >
                プロジェクト
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <div className="w-full h-full bg-white bg-opacity-20 flex items-center justify-center">
                <img src="sample.png" alt="Profile" className="w-48 h-48 rounded-full" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-start mt-12 space-x-6">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
            <FaGithub size={28} />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
            <FaLinkedin size={28} />
          </a>
          <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
            <FaTwitter size={28} />
          </a>
          <a href={`mailto:${socials.email}`} className="text-white hover:text-blue-200 transition-colors">
            <FaEnvelope size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
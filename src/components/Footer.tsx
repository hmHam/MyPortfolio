import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Social } from '../types';

interface FooterProps {
  socials: Social;
}

const Footer: React.FC<FooterProps> = ({ socials }) => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold"><span className="text-navy-300">Portfolio</span></h2>
            <p className="text-gray-300 mt-2">システムエンジニア</p>
          </div>
          
          <div className="flex space-x-6">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-navy-300 hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-navy-300 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-navy-300 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href={`mailto:${socials.email}`} className="text-navy-300 hover:text-white transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-navy-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} エンジニアポートフォリオ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
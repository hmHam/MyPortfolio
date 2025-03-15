import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#top" className="text-xl font-bold text-gray-800">
            <span className="text-blue-600">MyPortfolio</span>
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#certifications" className="text-gray-600 hover:text-blue-600 transition-colors">資格</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 space-y-3">
            <a href="#about" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">About</a>
            <a href="#skills" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">Skills</a>
            <a href="#projects" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">Projects</a>
            <a href="#experience" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">Experience</a>
            <a href="#certifications" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">資格</a>
            <a href="#contact" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
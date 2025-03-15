import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioData from './data/portfolioData';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero 
        name={portfolioData.name} 
        title={portfolioData.title} 
        description={portfolioData.heroDescription}
      />
      <About 
        about={portfolioData.about}
      />
      <Skills 
        skills={portfolioData.skills}
      />
      <Projects 
        projects={portfolioData.projects}
      />
      <Experience 
        experiences={portfolioData.experiences}
      />
      <Certifications 
        certifications={portfolioData.certifications}
      />
      <Contact 
        contact={portfolioData.contact}
      />
      <Footer 
        socials={portfolioData.socials}
      />
    </div>
  );
};

export default App;
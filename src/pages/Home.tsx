import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import GlobalMap from '../components/GlobalMap';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash links after component mounts
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure components are rendered
      }
    }
  }, [location]);

  return (
    <div className="pt-1">
      <Hero />
      <ServicesSection id="services-section" />
      <GlobalMap />
      <ContactForm />
    </div>
  );
};

export default Home;
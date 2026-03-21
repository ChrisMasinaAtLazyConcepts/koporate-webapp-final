import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import GlobalMap from '../components/GlobalMap';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
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
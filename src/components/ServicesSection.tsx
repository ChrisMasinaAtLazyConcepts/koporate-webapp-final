import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Palette, Megaphone } from 'lucide-react';
import Services from '../pages/Services';

const ServicesSection: React.FC = () => {


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     

        <Services/>
      </div>
    </section>
  );
};

export default ServicesSection;
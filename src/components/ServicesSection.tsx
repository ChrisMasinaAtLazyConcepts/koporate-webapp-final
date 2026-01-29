import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Palette, Megaphone } from 'lucide-react';
import ServicesCollage from '../components/ServicesCollage';

const ServicesSection: React.FC = () => {


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive marketing solutions tailored to your business needs
          </p>
        </motion.div>

        <ServicesCollage/>
      </div>
    </section>
  );
};

export default ServicesSection;
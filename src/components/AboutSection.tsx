import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award } from 'lucide-react';
import GlobalMap from './GlobalMap';

const AboutSection: React.FC = () => {
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
        >
          <strong className='text-xl'>‘APOTHECARY’</strong>
          <br/>
          <p className="text-l text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A term we use to describe creative alchemist of brand solutions — blending strategy and innovation to craft
            tailored remedies that grow and transform businesses.
          </p>
          <br/>
		  Korporate Apothecary (Pty) Ltd encompasses values such as maintaining client rapport (positive energy), professionalism, diversity,integrity and ensuring to always put quality first.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            We are an independent and dynamic marketing agency that delivers individually tailored marketing solutions for businesses. Korporate Apothecary encompasses values such as client’s centricity, professionalism, diversity, integrity and we do not compromise on quality. In addition, we provide proactive, customer-focused, agile and stable solutions across the marketing and events sector for our clientele.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

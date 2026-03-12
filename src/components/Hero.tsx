import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Link,Calendar,TrendingUp,Palette,Megaphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Calendar,
      title: 'Events & Activations',
      description: 'Creating memorable experiences that captivate and engage your audience through innovative event planning and brand activations.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Event Planning', 'Brand Activations', 'Experiential Marketing', 'Product Launches'],
    },
    {
      icon: TrendingUp,
      title: 'Strategy & Logistics',
      description: 'Comprehensive strategic planning and logistics management to ensure your campaigns run smoothly and deliver maximum impact.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Strategic Planning', 'Campaign Management', 'Logistics Coordination', 'Performance Analytics'],
    },
    {
      icon: Palette,
      title: 'Creative Solutions',
      description: 'Innovative creative solutions that bring your brand vision to life through compelling design and storytelling.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Brand Design', 'Creative Direction', 'Content Creation', 'Visual Identity'],
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Data-driven digital marketing strategies that amplify your brand presence and drive meaningful engagement.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Social Media Marketing', 'Content Strategy', 'SEO Optimization', 'Paid Advertising'],
    },
  ];
  return (
    <section className="relative h-80">
      <motion.div
        className="pl-10  bg-[#0F455D] flex flex-col md:flex-row items-center w-full h-80"
      >
        <div className="md:w-2/3 pl-25">
          <div className="pt-10">
            {/* Main Heading */}
            <div className="mb-6 py-15">
              <br/>
              <br/>
              <br/>
            <h5 className="pl-40 text-white text-4xl md:text-4xl font-bold leading-tight text-center">
			  TAILORED<br />
			  MARKETING<br />
			  SOLUTIONS
			</h5><br/>
			   {/* Button */}
               <div className="pl-40  text-center">
				  <motion.button 
					onClick={() => navigate('/contact')}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="bg-[#105569] text-white px-10 hover:bg-white hover:text-[#105569] py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-200"
				  >
					Talk to us
				  </motion.button>
				</div>
            </div>
            
            {/* Stacked Text */}
            <div className="mb-8">
              <div className="flex items-center gap-8">
                
             
              </div>
            </div>
            
            {/* Button */}
            
          </div>
        </div>
        
        <div className="md:w-1/3 h-full p-0 m-0">
          <img
            src={'./assets/images/logo-small.PNG'}
            alt={'Korporate Logo sm'}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
	  
	  
	  
	   <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            At Korporate Apothecary, we're not just a marketing agency — we're your creative growth partners. 
            Bold, independent, and driven by innovation, we craft tailored marketing solutions that move your 
            business forward. We believe in putting you at the center of everything we do, combining 
            professionalism with a passion for diversity, integrity, and uncompromising quality. From marketing 
            to events, we offer proactive, agile, and reliable solutions designed to captivate your audience 
            and deliver real results.
          </p>
        </motion.div>
    </section>
	
  );
};

export default Hero;
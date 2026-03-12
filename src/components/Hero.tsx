import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Link } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

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
    </section>
  );
};

export default Hero;
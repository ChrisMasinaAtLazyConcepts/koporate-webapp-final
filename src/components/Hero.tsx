import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/assets/images/gifting2.jpg',
      title: 'Corporate Gifting & Branding',
      subtitle: 'Transforming businesses through strategic innovation and creative excellence',
    },
    {
      image: '/assets/images/event.jfif',
      title: 'Events & Activations',
      subtitle: 'Creating memorable experiences that captivate and engage your audience',
    },
    {
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Strategy & Growth',
      subtitle: 'Comprehensive solutions that drive growth and deliver real results',
    },
    {
      image: '/assets/images/logistics.png',
      title: 'Logistics',
      subtitle: 'Comprehensive solutions that drive growth and deliver real results',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative">
     {/* Top Banner with Logo - Smaller height h-40 */}
<div className="w-full bg-white h-40">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
    <div className="flex items-center justify-between h-full">
      <div className="flex-1"></div>
      <div className="text-center">
        <h6 className="text-[#0F455D] text-sm md:text-base font-bold leading-tight">
          TAILORED<br />
          MARKETING<br />
          SOLUTIONS
        </h6>
        <motion.button 
          onClick={() => navigate('/contact')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#105569] text-white px-6 hover:bg-white hover:text-[#105569] py-1.5 rounded-lg text-xs font-semibold shadow-lg transition-all duration-200 mt-2"
        >
          Talk to us
        </motion.button>
      </div>
      <div className="flex-1 flex justify-end">
        <img
          src={'./assets/images/logo-large.PNG'}
          alt={'Korporate Logo'}
          className="w-40 h-40 object-contain"
        />
      </div>
    </div>
  </div>
</div>
      {/* Image Slider Section */}
      <div className="relative h-[500px] overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/60" />
              
              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                <div className="max-w-3xl px-4">
                  <motion.h2 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                  >
                    {slide.title}
                  </motion.h2>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-white' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <br/>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 max-w-7xl mx-auto"
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
      </div>
    </section>
  );
};

export default Hero;
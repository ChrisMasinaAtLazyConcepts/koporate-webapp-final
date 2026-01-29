import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Target, Gift, Layers, Megaphone, Calendar, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
const slides = [
  {
    id: 1,
    title: "Strategy & Growth",
    subtitle: "Strategic Planning & Business Development",
    icon: TrendingUp,
    color: "#0F455D",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
    // Alternative: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg" - business strategy meeting
  },
  {
    id: 2,
    title: "Corporate Gifting & Branding",
    subtitle: "Complete Brand Identity Solutions",
    icon: Gift,
    color: "#00CFC1",
    image: "https://media.istockphoto.com/id/1285407854/photo/close-up-view-of-hands-of-unrecognizable-woman-giving-red-gift-box-tied-to-bow-handed-to-man.jpg?s=612x612&w=0&k=20&c=bZg2SVMYwQKbBSJlbwoDmkZ_9ypSalqx-2dP7eES0kw=" 
  },
  {
    id: 4,
    title: "Brand Activations",
    subtitle: "Engaging Consumer Experiences",
    icon: Megaphone,
    color: "#1A688D",
    image: "https://media.istockphoto.com/id/2083917031/photo/growth-strategy-busines-trend-concept-businessman-hand-on-arrow-investment-icon-increase-sale.jpg?s=612x612&w=0&k=20&c=R0RvO5vQKCihnQcfCLttdsDslyyQ_JKMWrw_Mp-riXc="
    // Alternative: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg" - product launch event
  },
  {
    id: 5,
    title: "Events Management",
    subtitle: "Complete Event Solutions",
    icon: Calendar,
    color: "#0F455D",
    image: "https://media.istockphoto.com/id/995353918/photo/close-up-of-calendar-on-the-table-planning-for-business-meeting-or-travel-planning-concept.jpg?s=612x612&w=0&k=20&c=rVmKXCL9JlATlEdaJECJecIl9D3zJT0QykCCanhkh_I="
    // Alternative: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg" - conference setup
  }
];
  const currentSlide = slides[currentSlideIndex];
  const Icon = currentSlide.icon;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen  overflow-hidden">
      {/* Full Width Banner */}
 
 
      {/* Full Screen Image Slider */}
      <div className="relative h-[calc(100vh-100px)] overflow-hidden">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            currentSlideIndex === index && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0F455D]/60 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="relative h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-white"
                    >
                      {/* Service Icon */}
                      <div className="flex items-center mb-6">
                        <div 
                          className="w-16 h-16 rounded-xl flex items-center justify-center mr-6"
                          style={{ backgroundColor: `${slide.color}30` }}
                        >
                          <Icon className="w-10 h-10" style={{ color: slide.color }} />
                        </div>
                        <div>
                          <span className="text-lg font-semibold text-gray-300 uppercase tracking-wider">
                            Our Services
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                        {slide.title}
                      </h1>

                      {/* Subtitle */}
                      <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-medium">
                        {slide.subtitle}
                      </h2>

                      {/* CTA Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <button
                          onClick={() => navigate('/contact')}
                          className="group relative bg-gradient-to-r from-[#00CFC1] to-[#0F455D] text-white px-10 py-5 rounded-xl font-bold text-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                          <span className="relative z-10 flex items-center">
                            Talk to us
                            <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-[#0F455D] to-[#00CFC1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all z-20"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all z-20"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlideIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlideIndex === index
                  ? 'w-10 bg-[#00CFC1]'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-8 right-8 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 z-20">
          <span className="text-white text-sm font-medium">
            {currentSlideIndex + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Company Tagline */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10 text-center"
        >
          <p className="text-lg text-white font-medium">
            Going the extra mile to deliver quality is who we are
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Korporate Apothecary - Your Partner in Business Growth
          </p>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00CFC1]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0F455D]/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
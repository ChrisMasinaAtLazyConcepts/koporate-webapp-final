import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles, Target, Palette, Megaphone, Gift, Layers, Calendar, Zap, Star, Building, ArrowRight, Award, Users, Lightbulb } from 'lucide-react';

interface ServiceCategory {
  title: string;
  icon: React.ElementType;
  items: string[];
  color: string;
  description?: string;
}

const ServicesCollage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const serviceCategories: ServiceCategory[] = [
    {
      title: 'Strategy & Growth',
      icon: Target,
      color: '#0F455D',
      items: [
        'Brand Positioning',
        'Trade Route to Market Modelling',
        'Touch point Mapping',
        'Media Plans'
      ]
    },
    {
      title: 'Corporate Gifting & Branding',
      icon: Gift,
      color: '#00CFC1',
      items: [
        'Supply of any branding material',
        'Design & Printing',
        'Promotional items',
        'Procurement of branding',
        'Maintenance of Branding',
        'Erection and Dismantling of Branding',
        'Branding "Bible" Development',
        'Corporate gifts'
      ]
    },
    {
      title: 'Exhibitions and Displays',
      icon: Layers,
      color: '#105569',
      items: [
        'Design & Construction',
        'Custom & System Stands',
        'Exhibition Strategy',
        'Exhibition Activities',
        'Exhibition Management',
        'Portable Display Systems'
      ]
    },
    {
      title: 'Brand Activations',
      icon: Megaphone,
      color: '#1A688D',
      items: [
        'Campaign Conceptualization & Development',
        'Road Shows',
        'Taxi rank Activation',
        'Promotions',
        'Instore Activation',
        'Business Park Activation'
      ]
    },
    {
      title: 'Events Management',
      icon: Calendar,
      color: '#0F455D',
      items: [
        'Product Launches',
        'Gala/Awards Dinners',
        'Conferences',
        'Social Responsibility',
        'Sponsorship',
        'Concerts',
        'Sporty Events'
      ],
      description: 'Comprehensive event management services'
    },
    {
      title: 'Events Management (Detailed)',
      icon: Calendar,
      color: '#00CFC1',
      items: [
        'Design',
        'Event ID Creation',
        'Printing',
        'Online / Onsite RSVP Management',
        'Venue Procurement',
        'Décor & Styling',
        'Catering',
        'AV Development & Production',
        'Technical & Sound',
        'Disaster Management',
        'Health & Safety',
        'Shuttles & Logistics',
        'Protocol',
        'Photography & Videography',
        'Accommodation management',
        'Room drops',
        'Guest leisure activities',
        'Guest gifts',
        'Branding',
        'Budget',
        'Report',
        'De-Brief'
      ]
    }
  ];

  // Background images for the collage
  const backgroundImages = [
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
  ];

  // Auto-cycle through background images
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isOpen]);

  const handleServiceClick = (service: ServiceCategory) => {
    setSelectedService(service);
  };

  const closeServiceDetails = () => {
    setSelectedService(null);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-[#0F455D] to-[#00CFC1] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center justify-center">
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <Sparkles className="w-6 h-6 mr-2" />
              <span className="text-sm font-semibold">Our Services</span>
            </>
          )}
        </div>
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
            />

            {/* Main Collage Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed top-0 right-0 h-screen w-full lg:w-2/3 xl:w-1/2 z-40 overflow-hidden"
            >
              {/* Background Image Carousel */}
              <div className="absolute inset-0">
                {backgroundImages.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentImage === index ? 1 : 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-10" />
                    <img
                      src={img}
                      alt="Corporate Building"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                  {backgroundImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentImage === index
                          ? 'bg-white w-8'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-20 h-full overflow-y-auto">
                <div className="min-h-screen p-8 lg:p-12">
                  {/* Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Building className="w-10 h-10 text-[#00CFC1]" />
                          <h1 className="text-4xl lg:text-5xl font-bold text-white">
                            Our <span className="text-[#00CFC1]">Services</span>
                          </h1>
                        </div>
                        <p className="text-xl text-gray-300 max-w-2xl">
                          Comprehensive marketing, branding, and event solutions tailored for business excellence
                        </p>
                      </div>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all"
                      >
                        <X className="w-6 h-6 text-white" />
                      </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {[
                        { value: '6', label: 'Service Categories', icon: Star },
                        { value: '50+', label: 'Specialized Services', icon: Award },
                        { value: '100%', label: 'Client Focus', icon: Users },
                      ].map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10"
                          >
                            <Icon className="w-6 h-6 text-[#00CFC1] mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                            <div className="text-sm text-gray-300">{stat.label}</div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {serviceCategories.map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          onClick={() => handleServiceClick(service)}
                          className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 text-left border border-white/10 hover:border-[#00CFC1]/50 transition-all duration-300 hover:scale-[1.02]"
                        >
                          <div className="flex items-start gap-4">
                            <div 
                              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: `${service.color}20` }}
                            >
                              <Icon className="w-6 h-6" style={{ color: service.color }} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00CFC1] transition-colors">
                                {service.title}
                              </h3>
                              <div className="text-gray-300 text-sm mb-4">
                                <p>{service.items.length} specialized services</p>
                              </div>
                              <div className="flex items-center text-[#00CFC1] text-sm font-medium">
                                <span>View Details</span>
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </div>
                          
                          {/* Preview Items */}
                          <div className="mt-4 space-y-2">
                            {service.items.slice(0, 3).map((item, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-400">
                                <div className="w-1 h-1 rounded-full bg-[#00CFC1] mr-3"></div>
                                <span className="truncate">{item}</span>
                              </div>
                            ))}
                            {service.items.length > 3 && (
                              <div className="text-sm text-gray-500">
                                +{service.items.length - 3} more services
                              </div>
                            )}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Call to Action */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="bg-gradient-to-r from-[#0F455D]/50 to-[#00CFC1]/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10"
                  >
                    <Lightbulb className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Ready to Transform Your Business?
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                      Discover how our comprehensive suite of services can elevate your brand and drive meaningful growth.
                    </p>
                    <button className="bg-white text-[#0F455D] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Get Started Today
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeServiceDetails}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 m-auto z-50 max-w-4xl w-full h-fit max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-[#0F455D] rounded-2xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${selectedService.color}20` }}
                    >
                      {React.createElement(selectedService.icon, {
                        className: "w-8 h-8",
                        style: { color: selectedService.color }
                      })}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                      <p className="text-gray-300">{selectedService.items.length} specialized services</p>
                    </div>
                  </div>
                  <button
                    onClick={closeServiceDetails}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedService.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-[#00CFC1]/30 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#00CFC1]/20">
                          <Zap className="w-4 h-4 text-[#00CFC1]" />
                        </div>
                        <span className="text-white group-hover:text-[#00CFC1] transition-colors">
                          {item}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Need This Service?</h4>
                      <p className="text-gray-300">Let's discuss how we can implement this for your business</p>
                    </div>
                    <button className="bg-[#00CFC1] hover:bg-[#00b3a8] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                      Request Consultation
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesCollage;
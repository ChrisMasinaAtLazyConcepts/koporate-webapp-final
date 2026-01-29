import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Palette, Megaphone, CheckCircle, CogIcon, EditIcon, TruckIcon, GiftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: GiftIcon,
    title: 'Corporate Gifting & Branding',
    description: 'Enhancing brands with custom-branded merchandise and corporate gifts.',
    image: '/assets/images/gifting.PNG',
    image2: '/assets/images/gifting.jfif',
    image3: '/assets/images/branding2.jpg', // Third image for first service
    features: ['Events & Activations','Print Production',
      'Conference Management','Promotional Items','Stationery Supplies','Out of Home Advertising','Point of Sales','Exhibition Stands'
    ],
  },
  {
    icon: Calendar,
    title: 'Events & Activations',
    description: 'Creating memorable experiences that captivate and engage your audience through innovative event planning and brand activations.',
    image: '/assets/images/activations.PNG',
    image2: '/assets/images/activations.jpg',
    features: [
     'Road Shows','Instore Activations','Taxi Rank Activations','Design & Decor ','Event Production','Full AV Production'
    ],
  },
  {
    icon: TrendingUp,
    title: 'Strategy & Growth',
    description: 'Comprehensive strategic planning and logistics management to ensure your campaigns run smoothly and deliver maximum impact.',
    image: '/assets/images/strategy.PNG',
    image2: '/assets/images/events.jpg',
    features: [
        'Brand Positioning',
        'Trade Route to Market Modelling',
        'Touch-point Mapping',
        'Media Plans',
        'Market Research'
      ],
    
  },
  {
    icon: TruckIcon,
    title: 'Logistic',
    description: 'Innovative creative solutions that bring your brand vision to life through compelling design and storytelling.',
    image: '/assets/images/logistics.png',
    image2: '/assets/images/logistics.png',
    features: [
      'Logistic coordination',
    ],
  }
];

interface ServicesProps {
  id?: string;
}

const Services: React.FC<ServicesProps> = ({ id }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({});

  // Auto-loop functionality for all services
  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    services.forEach((service, index) => {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev => {
          const currentIndex = prev[index] || 0;
          // For first service, loop through 3 images, for others loop through 2 images
          const maxIndex = index === 0 ? 2 : 1;
          const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
          
          return {
            ...prev,
            [index]: nextIndex
          };
        });
      }, 3000); // Change image every 3 seconds

      intervals.push(interval);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []); // Empty dependency array means this runs once on mount

  const getCurrentImage = (index: number) => {
    const imageIndex = currentImageIndex[index] || 0;
    const images = [
      services[index].image, 
      services[index].image2,
      services[index].image3 // This will be undefined for services without image3, which is fine
    ].filter(Boolean); // Remove undefined values
    
    return images[imageIndex] || services[index].image; // Fallback to first image
  };

  const getImageCount = (index: number) => {
    if (index === 0) return 3; // First service has 3 images
    return 2; // Other services have 2 images
  };

  return (
    <div className="pt-1">
      <section 
        className="bg-gradient-to-r from-[#173647] via-transparent via-90% to-[#5DD8D9] to-90% bg-[length:100%_100%] bg-no-repeat text-white"
      >
        <motion.div
          className="text-center mb-16 bg-white"
        >
          <h2 className="pt-5 text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive marketing solutions tailored to your business needs
          </p>
        </motion.div>
      </section>
      
  {/* Services Grid */}
<section id={id} className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="space-y-20">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className={'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'}
        >
          <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#00CFC1] rounded-2xl flex items-center justify-center flex-shrink-0">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex-1">
                {service.title}
              </h2>
            </div>
          
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {service.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Section */}
          <motion.div 
            className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Fixed size container */}
            <div className="pt-15 w-full h-60 md:h-96 lg:h-[500px] rounded-lg shadow-lg overflow-hidden">
              <img
                src={getCurrentImage(index)}
                alt={service.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
            
            {/* Image Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {Array.from({ length: getImageCount(index) }).map((_, dotIndex) => (
                <div
                  key={dotIndex}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    (currentImageIndex[index] || 0) === dotIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
};

export default Services;
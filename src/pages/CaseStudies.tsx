import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AboutSection from '../components/AboutSection';
import { Search, Filter, ExternalLink, Building2, Star, MapPin, Users, PersonStanding, Target, Package, Palette, Zap } from 'lucide-react';
import {Footer} from '../components/Footer';
import { Image, FileText, Building, PhoneCall } from 'lucide-react';
interface Client {
  id: string;
  name: string;
  logo: string;
  industry: string;
  description: string;
  website: string;
  location: string;
  since: string;
  projects: number;
  category: string;
  featured?: boolean;
}

const CaseStudies: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [filteredClients, setFilteredClients] = useState<Client[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const categories = ['All', 'Enterprise', 'Government Services','Food and Beverages', 'Beauty Products and Services', 'Transport and Logistics', 'Electronics'];

  // Array of local asset images for the grid
  const gridImages = [
    './assets/images/recent works/case1.PNG',
    './assets/images/recent works/case2.PNG',
    './assets/images/recent works/case3.PNG',
    './assets/images/recent works/case4.PNG',
    './assets/images/recent works/case5.PNG',
    './assets/images/recent works/case6.PNG',
    './assets/images/recent works/case7.PNG',
    './assets/images/recent works/case8.PNG',
    './assets/images/recent works/case9.PNG'
  ];

  // Fallback images in case local ones don't exist
  const fallbackImages = [
    'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    'https://images.pexels.com/photos/3183160/pexels-photo-3183160.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    'https://images.pexels.com/photos/3184329/pexels-photo-3184329.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    'https://images.pexels.com/photos/3182802/pexels-photo-3182802.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    'https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  ];

  const handleClientClick = (client: Client) => {
    setSelectedClient(client);
  };

  const closeModal = () => {
    setSelectedClient(null);
  };

  return (
    <div className="pt-1 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
<section className="relative bg-gradient-to-r from-[#0F455D] to-[#105569] text-white overflow-hidden">
  <div className="absolute inset-0 bg-black/20" />
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
        <FileText className="w-10 h-10" />
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        Case Studies
      </h1>
      <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
        Discover our successful projects and the strategies behind them
      </p>
    </motion.div>
  </div>
</section>

      {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
           </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
        >
		<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
           <span className="text-[#0F455D]"> ‘APOTHECARY’</span>
            </h2>
          
          <p className="text-lg text-bold text-gray-700 leading-relaxed">
           A term we use to describe creative alchemist of brand solutions — blending strategy and innovation to craft
            tailored remedies that grow and transform businesses.
           </p>
		       <motion.div
          className="text-center mb-16"
        >
          <br/>
          <p className="text-l text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We value sustainable growth
and focus on maintaining
positive and progressive client
relationships that foster respect
and creativity in the long-term
business growth journey.
		  </p>
          <br/>
		  
        </motion.div>
          </motion.div>

          {/* Image Grid Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Work in <span className="text-[#0F455D]">Action</span>
            </h3>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Showcasing our successful projects and client partnerships across various industries
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {gridImages.map((imageSrc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl aspect-square"
                >
                  <img
                    src={imageSrc}
                    alt={`Case Study ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = fallbackImages[index];
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white">
                      <div className="text-sm font-semibold">Project #{index + 1}</div>
                      <div className="text-xs opacity-90">View Details</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-16 bg-gradient-to-r from-[#0F455D] to-[#105569] rounded-2xl p-8 md:p-12 text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
                  <div className="text-gray-300">Successful Projects</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-12 border border-gray-200"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create innovative solutions for your business
            </p>
            <button className="bg-gradient-to-r from-[#0F455D] to-[#00CFC1] text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300">
             Talk to us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Client Detail Modal */}
      <AnimatePresence>
        {selectedClient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64">
                <img
                  src={selectedClient.logo}
                  alt={selectedClient.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-3 mb-2">
                    <h2 className="text-3xl font-bold">{selectedClient.name}</h2>
                    {selectedClient.featured && (
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    )}
                  </div>
                  <p className="text-xl text-gray-200">{selectedClient.industry}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  X 
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700">{selectedClient.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building2 className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700">{selectedClient.category}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">About {selectedClient.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedClient.description}</p>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={selectedClient.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button
                    onClick={closeModal}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CaseStudies;
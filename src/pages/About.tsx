import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Info, ChevronDown, Mail, Phone, MapPin, Linkedin, X, Heart, Eye, Target as TargetIcon, Star, Shield, Users as UsersIcon, Lightbulb, TrendingUp, Award as AwardIcon, Building } from 'lucide-react';
import Footer from '../components/Footer';

const About: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  const stats = [
    { number: '1000+', label: 'Projects Completed', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Target },
    { number: '7+', label: 'Countries', icon: Globe },
  ];

  const team = [
    {
      name: 'Kalenda Kayembe',
      role: 'Senior Manager',
      image: './assets/images/kalenda.JPG',
      email: 'kalenda@korporate-apothecary.com',
      phone: '+27 11 234 5678',
      location: 'Johannesburg, South Africa',
      linkedin: 'https://linkedin.com/in/kalenda-kayembe',
      bio: '15+ years of experience in corporate strategy and business development. Passionate about driving growth through innovative solutions.',
      department: 'Strategic Management'
    },
    {
      name: 'Ethel Maphanga',
      role: 'Accounts Manager',
      image: './assets/images/ethel.PNG',
      email: 'ethel@korporate-apothecary.com',
      phone: '+27 11 234 5678',
      location: 'Johannesburg, South Africa',
      linkedin: 'https://linkedin.com/in/ethel-maphanga',
      bio: 'Specialized in financial strategy and client relations with 10 years of experience in corporate accounting and management.',
      department: 'Finance & Accounts'
    },
    {
      name: 'Antonio Neves',
      role: 'Sales/Operations Manager',
      image: './images/antonio.jpg',
      email: 'antonio@korporate-apothecary.com',
      phone: '+27 11 234 5678',
      location: 'Johannesburg, South Africa',
      linkedin: 'https://linkedin.com/in/antonio-neves',
      bio: 'Expert in sales optimization and operational efficiency with a track record of boosting revenue by 40%+ for multinational clients.',
      department: 'Sales & Operations'
    },
    {
      name: 'Luis Silva',
      role: 'Creative Director',
      image: './images/luis.jpg',
      email: 'luis@korporate-apothecary.com',
      phone: '+27 11 234 5678',
      location: 'Johannesburg, South Africa',
      linkedin: 'https://linkedin.com/in/luis-silva',
      bio: 'Award-winning creative director with expertise in brand storytelling and digital campaigns that drive engagement and conversion.',
      department: 'Creative & Design'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices'
    },
    {
      icon: Star,
      title: 'Professionalism',
      description: 'Maintaining the highest standards of quality and service excellence'
    },
    {
      icon: UsersIcon,
      title: 'Diversity',
      description: 'Embracing different perspectives and fostering inclusive environments'
    },
    {
      icon: AwardIcon,
      title: 'Excellence',
      description: 'Striving for superior performance in everything we do'
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'Understanding and addressing our clients unique needs and challenges'
    }
  ];

  const turnkeySolutions = [
    'Brand Strategy & Development',
    'Marketing Campaigns',
    'Event Production & Management',
    'Digital Marketing Solutions',
    'Creative Design Services',
    'Operational Strategy',
    'Market Research & Analysis',
    'Performance Measurement'
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Updated Virtual Business Card Component with transparent overlay
  const VirtualBusinessCard = ({ member, index }: { member: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="relative bg-gradient-to-br from-[#0F455D] to-[#00CFC1] rounded-2xl p-6 text-white shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setActiveCard(null)}
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10 bg-black/20 rounded-full p-1 hover:bg-black/30"
      >
        <X className="w-5 h-5" />
      </button>
      
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/30 flex-shrink-0">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-white/90 text-sm">{member.role}</p>
            <p className="text-xs text-white/70">{member.department}</p>
          </div>
        </div>
        
        <div className="space-y-3 mb-4">
          <p className="text-white/90 text-sm leading-relaxed">{member.bio}</p>
        </div>
        
        <div className="space-y-2">
          <a 
            href={`mailto:${member.email}`}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group text-sm"
          >
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 flex-shrink-0">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <span className="truncate">{member.email}</span>
          </a>
          
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span>{member.phone}</span>
          </div>
          
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <span>{member.location}</span>
          </div>
          
          <a 
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group text-sm"
          >
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 flex-shrink-0">
              <Linkedin className="w-3.5 h-3.5" />
            </div>
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </motion.div>
  );

  // Updated Team Member Card with circular design and hover overlay
  const TeamMemberCard = ({ member, index }: { member: any; index: number }) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex justify-center"
    >
      <div 
        className="bg-white rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative aspect-square w-full max-w-[280px]"
        onClick={() => setActiveCard(index)}
      >
        {/* Card overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F455D]/90 via-[#0F455D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-end pb-8 rounded-full">
          <button className="bg-white text-[#0F455D] px-4 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 text-sm shadow-lg">
            <Info className="w-4 h-4" />
            View Contact
          </button>
        </div>
        
        {/* Image container */}
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-full"></div>
        </div>
        
        {/* Name and role - positioned at bottom of circle */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white rounded-b-full">
          <h4 className="font-bold text-lg truncate">{member.name}</h4>
          <p className="text-sm text-white/90">{member.role}</p>
        </div>
      </div>
      
      {/* Virtual Business Card Modal with improved backdrop */}
      {activeCard === index && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setActiveCard(null)}
        >
          <div className="relative w-full max-w-md">
            <VirtualBusinessCard member={member} index={index} />
          </div>
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="pt-1">
      {/* Hero Section with Dark Corporate Building */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Single dark corporate building image */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            {/* Dark corporate building image */}
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80&blend=000000&blend-alpha=50&blend-mode=normal&sat=-30&con=-15"
              alt="Corporate Building at Night"
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F455D]/80 via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* Centered content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <div className="text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
            >
              An independent and dynamic Marketing, Production & Operations Agency delivering tailored turn-key solutions.
            </motion.p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </motion.div>
      </section>

      {/* Company Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              <span className="text-[#0F455D]">Korporate Apothecary</span> 
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              We are an independent and dynamic Marketing, Production & Operations Agency that delivers individually tailored turn-key marketing solutions for businesses.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0F455D]/10 mb-6">
                      <Icon className="w-8 h-8 text-[#0F455D]" />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                    <p className="text-lg text-gray-600">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Our Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 bg-gradient-to-r from-[#0F455D] to-[#105569] rounded-2xl p-12 text-white"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Philosophy</h3>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                As our name suggests, 'Korporate Apothecary' offers unique expertise to maintain positive and progressive vital health for your businesses.
              </p>
            </div>
            <p className="text-lg text-white/80 leading-relaxed text-center max-w-4xl mx-auto">
              We stock a full range of branding, marketing, and strategy focused solutions that can be used as remedies for your long-term growth strategy. Our turn-key solutions drive business value through innovative approaches and measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section with Circular Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Meet Our Team<span className="text-[#0F455D]"></span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-2"
            >
              Click on any team member to view their virtual business card
            </motion.p>
            <p className="text-gray-500">Hover for details, click for full contact information</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {team.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
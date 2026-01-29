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

  // Virtual Business Card Component
  const VirtualBusinessCard = ({ member, index }: { member: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-[#0F455D] to-[#00CFC1] rounded-2xl p-6 text-white z-30 shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setActiveCard(null)}
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>
      
      <div className="h-full flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 py-rounded-full overflow-hidden border-4 border-white/20">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{member.name}</h3>
            <p className="text-white/90">{member.role}</p>
            <p className="text-sm text-white/70">{member.department}</p>
          </div>
        </div>
        
        <div className="space-y-4 mb-6">
          <p className="text-white/90 text-sm leading-relaxed">{member.bio}</p>
        </div>
        
        <div className="space-y-3">
          <a 
            href={`mailto:${member.email}`}
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-sm">{member.email}</span>
          </a>
          
          <div className="flex items-center gap-3 text-white/80">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-sm">{member.phone}</span>
          </div>
          
          <div className="flex items-center gap-3 text-white/80">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-sm">{member.location}</span>
          </div>
          
          <a 
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20">
              <Linkedin className="w-4 h-4" />
            </div>
            <span className="text-sm">Connect on LinkedIn</span>
          </a>
        </div>
        

      </div>
    </motion.div>
  );

  // Updated Team Member Card with hover effect
  const TeamMemberCard = ({ member, index }: { member: any; index: number }) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div 
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative h-full"
        onClick={() => setActiveCard(index)}
      >
        {/* Card overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F455D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-6">
          <button className="bg-white text-[#0F455D] px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
            <Info className="w-4 h-4" />
            View Contact
          </button>
        </div>
        
        <div className="relative h-48 overflow-hidden">
          <img
				src={member.image}
				alt={member.name}
				className="w-full h-full group-hover:scale-110 transition-transform duration-500 " 
			  />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        </div>
        <div className="p-6 relative">
          <h4 className="font-bold text-lg text-gray-900 mb-1">{member.name}</h4>
          <p className="text-[#0F455D] font-medium">{member.role}</p>
          
          {/* Quick contact info on hover */}
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <Mail className="w-3 h-3" />
              <span className="truncate">{member.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-3 h-3" />
              <span>{member.location.split(',')[0]}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Virtual Business Card Modal */}
      {activeCard === index && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
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

      {/* Vision, Mission & Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#0F455D]/10 flex items-center justify-center mr-4">
                    <Eye className="w-7 h-7 text-[#0F455D]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To become the most preferred supplier in the marketing and events industry – 
                    reputable for cutting edge production, innovative strategy, operational excellence, 
                    and thought leadership.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-gray-500">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">Driving Industry Leadership</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#00CFC1]/10 flex items-center justify-center mr-4">
                    <TargetIcon className="w-7 h-7 text-[#00CFC1]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To lead with insight and innovation by constantly improving our product quality, 
                    customer-centricity, business agility, resilience, operational excellence, 
                    service excellence and innovation.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-gray-500">
                    <Lightbulb className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">Innovation-Driven Excellence</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Turn-key Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0F455D] to-[#105569] rounded-2xl shadow-lg p-8 text-white transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Turn-key Solutions</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-white/90 leading-relaxed text-lg mb-4">
                    Our comprehensive solutions drive business value across all aspects of marketing and operations:
                  </p>
                  <ul className="space-y-2">
                    {turnkeySolutions.map((solution, index) => (
                      <li key={index} className="flex items-center text-white/80">
                        <div className="w-2 h-2 rounded-full bg-white/60 mr-3"></div>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center text-white/70">
                    <TargetIcon className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">Business Value Focus</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      {/* Team Section */}
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
              Meet Our <span className="text-[#0F455D]">Leadership</span>
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
            <p className="text-gray-500">Hover for quick info, click for full details</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
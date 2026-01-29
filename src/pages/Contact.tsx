import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, PhoneCall } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SocialButtons from '../components/SocialButtons';
import Footer from '../components/Footer';
import { Image, FileText, Building} from 'lucide-react';
const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['196 Church Street', 'Johannesburg North', 'Randburg, 2188'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+27 61 582 4373'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['accounts@korporate.co.za', 'info@korporate.co.za'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 10:00 AM - 15:00 PM'],
    },
  ];

  return (
    <div className="pt-1">
      {/* Hero Section */}
<section className="relative bg-gradient-to-r from-[#0F455D] to-[#105569] text-white overflow-hidden">
  <div className="absolute inset-0 bg-black/20" />
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm mb-6 mx-auto">
        <PhoneCall className="w-10 h-10" />
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        Contact Us
      </h1>
      <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
        Ready to start your next project? Let's create something extraordinary together.
      </p>
    </motion.div>
  </div>
</section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#173647] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="bg-[#173647] w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>

              
            ))}
          </div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Follow Us</h3>
            <SocialButtons />
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
    </div>
  );
};

export default Contact;
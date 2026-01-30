import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import CaseStudies from '../components/CaseStudies';
import GlobalMap from '../components/GlobalMap';
import ContactForm from '../components/ContactForm';
import VideoPlayer from '../components/VideoPlayer';
import Footer from '../components/Footer';
import Services from './Services';

const Home: React.FC = () => {
	useEffect(() => {
  // Listen for page load to handle service scrolling
  const handleLoad = () => {
    if (sessionStorage.getItem('scrollToServices') === 'true') {
      setTimeout(() => {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
          servicesSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
        sessionStorage.removeItem('scrollToServices');
      }, 800); // Even longer delay
    }
  };

  window.addEventListener('load', handleLoad);
  
  // Also trigger immediately in case page is already loaded
  handleLoad();
  
  return () => window.removeEventListener('load', handleLoad);
}, []);

  useEffect(() => {
    const handleScrollToServices = () => {
      const hash = window.location.hash;
      
      // Check URL hash
      if (hash === '#services-section' || sessionStorage.getItem('scrollToServices') === 'true') {
        setTimeout(() => {
          const servicesSection = document.getElementById('services-section');
          if (servicesSection) {
            const yOffset = -100; // Adjust this value for header offset if needed
            const y = servicesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({
              top: y,
              behavior: 'smooth'
            });
            
            // Clear flags
            sessionStorage.removeItem('scrollToServices');
            window.history.replaceState(null, '', window.location.pathname); // Remove hash from URL
          }
        }, 500); // Increased delay for better page load
      }
    };

    // Initial check on mount
    handleScrollToServices();
    
    // Also check after a longer delay for slow loads
    const timeoutId = setTimeout(handleScrollToServices, 1000);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Width */}
      <div className="w-full">
        <Hero />
      </div>
      
      {/* Main Content Container - Centered with proper padding */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 ">
       
        {/* Services Section with Enhanced Layout */}
        <section className="mb-24 md:mb-32" >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-lg">
            <Services id="services-section"/>
          </div>
        </section>
        
        <section className="mb-24 md:mb-32" id="map-section">
          <GlobalMap />
        </section>
        
        {/* Contact Form Section with Professional Layout */}
        <section className="mb-24 md:mb-32  ">
          <div className="mb-12 text-center" >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your business? Let's start a conversation
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 ">
            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1 bg-[#0F455D] text-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Location</h4>
                  <p className="text-gray-300">123 Business Street<br />Johannesburg, South Africa</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Business Hours</h4>
                  <p className="text-gray-300">
                    Mon - Fri: 8:00 AM - 6:00 PM<br />
                    Sat: 9:00 AM - 1:00 PM<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="font-semibold text-blue-300 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default Home;
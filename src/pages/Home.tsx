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
<section className="mb-24 md:mb-32 relative">
  {/* Background Image with Overlay */}
 
  <div className="relative z-10  bg-gradient-to-br from-[#0F455D]/5 via-transparent to-[#00CFC1]/5">
    <div className="mb-12 text-center ">
     
      <p className="text-gray-600 max-w-3xl mx-auto mb-8">
        Ready to transform your business? Let's start a conversation
      </p>
      <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
    </div>
    
   
      
      {/* Contact Form */}
      <div className="lg:col-span-3 bg-white text-center ">
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
         
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
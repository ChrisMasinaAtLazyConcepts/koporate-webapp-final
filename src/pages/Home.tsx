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
    
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
      {/* Contact Information Card */}
      <div className="lg:col-span-2 bg-gradient-to-br from-[#0F455D] to-[#105569] rounded-2xl p-8 shadow-xl text-white overflow-hidden relative">
        {/* Decorative background element */}
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/5"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-white/5"></div>
        
        <div className="relative z-10 ">
          <div className="flex items-center mb-8">
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Contact Information</h3>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-blue-300 mb-1">Email</h4>
                <p className="text-gray-200">info@korporate-apothecary.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-blue-300 mb-1">Phone</h4>
                <p className="text-gray-200">+27 11 234 5678</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-blue-300 mb-1">Location</h4>
                <p className="text-gray-200">196 Church Street, Johannesburg North</p>
              </div>
            </div>
          </div>
          
          {/* Business Hours */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <h4 className="font-semibold text-blue-300 mb-3">Business Hours</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-sm text-gray-300">Monday - Friday</p>
                <p className="text-sm font-medium">8:00 AM - 5:00 PM</p>
              </div>
             <div>
                <p className="text-sm text-gray-300">Saturday</p>
                <p className="text-sm font-medium">10:00 AM - 3:00 PM</p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-8">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="lg:col-span-3 bg-white">
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
         
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</section>
      </main>
      
    </div>
  );
};

export default Home;
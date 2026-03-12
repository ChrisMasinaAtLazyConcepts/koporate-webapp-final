import React, { useState } from 'react';
import { Lock, Mail, Phone, MapPin } from 'lucide-react';
import AdminLogin from './AdminLogin';

const Footer: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/Korporate-Apothecary-1457361754372325/', icon: 'facebook' },
    { name: 'Instagram', href: 'https://www.instagram.com/korporateapothecary/?hl=en', icon: 'instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white/90">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Korporate Apothecary</h3>
           
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href={socialLinks[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </a>
              <a 
                href={socialLinks[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-white/70 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-white/70 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm text-white/70 hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-sm text-white/70 hover:text-white transition-colors duration-200">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-white/70 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-white/70 mt-0.5" />
                <a href="mailto:info@korporate.co.za" className="text-sm text-white/70 hover:text-white transition-colors duration-200">
                  info@korporate.co.za
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-white/70 mt-0.5" />
                <a href="tel:+27615824373" className="text-sm text-white/70 hover:text-white transition-colors duration-200">
                  +27 61 582 4373
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-white/70 mt-0.5" />
                <span className="text-sm text-white/70">
                  Johannesburg, South Africa
                </span>
              </div>
            </div>
          </div>

          {/* Admin Access */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Admin</h3>
            <button
              onClick={() => setIsLoginOpen(true)}
              className="flex items-center space-x-2 text-sm text-white/70 hover:text-white transition-colors duration-200 group"
            >
              <Lock className="w-4 h-4 group-hover:text-[#00CFC1] transition-colors" />
              <span className="group-hover:text-[#00CFC1] transition-colors">Admin Login</span>
            </button>
            <p className="text-xs text-white/50 pt-4">
              Secure access for authorized personnel only
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
            <div>
              © {currentYear} Korporate Apothecary. All rights reserved.
            </div>
            <div className="mt-2 md:mt-0">
              Crafted with precision by Korporate Apothecary
            </div>
          </div>
        </div>
      </div>

      <AdminLogin 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
    </footer>
  );
};

export default Footer;
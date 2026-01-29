import { Link, User } from 'lucide-react';
import React, { useState } from 'react';
import AdminLogin from './AdminLogin';

const Footer: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const currentYear = new Date().getFullYear();
 const socialLinks = [
    {  href: 'https://www.facebook.com/Korporate-Apothecary-1457361754372325/' },
    {  href: 'https://www.instagram.com/korporateapothecary/?hl=en'},
  ];
  return (
    <footer className="bg-[#0F455D] text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Info */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Korporate Apothecary</h3>
          <a
            onClick={() => setIsLoginOpen(true)}
            className="text-[#00CFC1] hover:text-teal-500 cursor-pointer transition-all duration-300 font-medium underline"
          >
            <span>Admin Login</span>
          </a>
          </div>

          {/* Contact Info */}
          <div className="mb-4 md:mb-0">
            <div className="text-sm text-gray-400">
              <p>Email: info@korporate.co.za</p>
              <p>Phone:+27 61 582 4373</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
             href={socialLinks[1].href} 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
           
            <a 
              href={socialLinks[0].href} 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar with Copyright and Designer Credit */}
        <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-2 md:mb-0">
            © {currentYear} Korporate. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm">
            Designed by{' '}
            <a 
              href="https://next-group.co.za" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
            >
            Next Group (Pty).
            </a>
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
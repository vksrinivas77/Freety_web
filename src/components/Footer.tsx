import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Logo variant="white" size="medium" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Revolutionizing healthy eating with fresh, organic salads available anytime, anywhere.
              Join our mission to make healthy choices effortless and delicious.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-300 hover:text-[#B7E4C7] transition-colors">Home</a></li>
              <li><a href="/our-salads" className="text-gray-300 hover:text-[#B7E4C7] transition-colors">Our Salads</a></li>
              <li><a href="/subscription" className="text-gray-300 hover:text-[#B7E4C7] transition-colors">Subscription</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-[#B7E4C7] transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-[#B7E4C7] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#B7E4C7]" />
                <span className="text-gray-300">info@fretty.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#B7E4C7]" />
                <span className="text-gray-300">+91-98765-43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#B7E4C7]" />
                <span className="text-gray-300">India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Fretty. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#B7E4C7] text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-[#B7E4C7] text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

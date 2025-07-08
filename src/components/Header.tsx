import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface HeaderProps {
  cartItems?: number;
  onCartToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems = 0, onCartToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Salads', path: '/our-salads' },
    { name: 'Subscription', path: '/subscription' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg transform translate-y-0' 
        : 'bg-white/90 backdrop-blur-sm transform translate-y-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <Logo size="medium" className="transition-all duration-300 group-hover:scale-110" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-green-600 transform hover:scale-105 nav-item ${
                  location.pathname === item.path
                    ? 'text-green-600'
                    : 'text-gray-700'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-slide-in"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Cart & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={onCartToggle}
              className="relative p-2 text-gray-700 hover:text-green-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce cart-badge">
                  {cartItems}
                </span>
              )}
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:from-orange-600 hover:to-orange-700 hover:scale-105 hover:shadow-lg shine-effect cta-shine transform">
              <Link to="/our-salads" className="block">Order Now</Link>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-all duration-300 hover:scale-110 transform"
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
              <X className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200 py-4 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-all duration-300 hover:text-green-600 px-2 py-2 rounded-md transform hover:translate-x-2 stagger-${index + 1} ${
                    location.pathname === item.path
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <button 
                  onClick={onCartToggle}
                  className="relative p-2 text-gray-700 hover:text-green-600 transition-colors duration-300"
                >
                  <ShoppingCart className="w-6 h-6" />
                  {cartItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItems}
                    </span>
                  )}
                </button>
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:from-orange-600 hover:to-orange-700 shine-effect flex-1 ml-4">
                  <Link to="/our-salads" className="block">Order Now</Link>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Cafeteria', href: '/cafeteria' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-display font-bold text-bakery-chocolate">
              <span className="sm:inline">Patience Bakes</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-bakery-chocolate hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname + location.hash === link.href ? 'text-primary-600 font-bold' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/order"
                className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-200"
              >
                Order Now
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-bakery-chocolate hover:text-primary-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 bg-white shadow-lg' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block text-bakery-chocolate hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/order"
            className="block bg-primary-600 text-white px-3 py-2 rounded-md text-base font-medium text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-bakery-chocolate text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold">Patience Bakes</h2>
            <p className="text-white/60 leading-relaxed">
              Crafting premium cakes and pastries with love and patience in Kandemba. Your destination for all things sweet.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'whatsapp'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-white/20 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#products" className="hover:text-primary-400 transition-colors">Our Products</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="#classes" className="hover:text-primary-400 transition-colors">Baking Classes</a></li>
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>Kandemba, Main Street</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+123 456 7890</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Newsletter</h4>
            <p className="text-white/60 mb-4 text-sm">Get sweet updates and special offers!</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-primary-400"
              />
              <button className="bg-primary-600 px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <div className="text-center md:text-left">
            <p>© 2026 Patience Bakes. All rights reserved.</p>
            <p className="mt-1 text-white/30 italic">Developed and Maintained by Great Expectations</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

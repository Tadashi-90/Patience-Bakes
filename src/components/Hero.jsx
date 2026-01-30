import React from 'react';
import { cakeOneNoBg } from '../assets';

const Hero = () => {
  return (
    <section className="relative min-h-screen lg:h-screen flex items-center overflow-x-hidden py-20 lg:py-0">
      {/* Background with decorative elements */}
      <div className="absolute inset-0 bg-[#FFFBF0] -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-100/50 rounded-l-[100px] transform translate-x-1/4"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <div className="space-y-8 animate-fade-in-left text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-bakery-chocolate leading-tight">
              Crafting <span className="text-primary-600">Sweet Moments</span> in Kandemba
            </h1>
            <p className="text-base sm:text-lg text-bakery-chocolate/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              From artisan cakes to delightful pastries, we bake with love and patience to bring you the finest treats in town. Experience the magic of Patience Bakes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary-600 text-white font-semibold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-200 hover:-translate-y-1"
              >
                Explore Menu
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-bakery-chocolate text-bakery-chocolate font-semibold text-lg hover:bg-bakery-chocolate hover:text-white transition-all hover:-translate-y-1"
              >
                How It Works
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white bg-primary-200 flex items-center justify-center text-xs font-bold">
                    🍰
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm font-medium text-bakery-chocolate/60 text-left">
                <span className="text-bakery-chocolate font-bold block text-base sm:text-lg">500+ Happy Customers</span>
                Join our sweet community
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in-right flex justify-center order-1 lg:order-2 mb-12 lg:mb-0">
            <div className="relative z-10 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] flex items-center justify-center">
              {/* Dotted Border Container */}
              <div className="absolute inset-0 border-4 border-dashed border-primary-600 rounded-full animate-spin-slow"></div>
              
              {/* Image Container */}
              <div className="relative w-[85%] h-[85%] bg-white rounded-full overflow-hidden shadow-2xl flex items-center justify-center group">
                <img
                  src={cakeOneNoBg}
                  alt="Signature Cake"
                  className="w-[90%] h-[90%] object-contain transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
                />
              </div>
            </div>
            
            {/* Floating elements - adjusted for mobile */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 z-20 bg-white p-3 sm:p-4 rounded-2xl shadow-xl animate-bounce-slow">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-green-100 p-1.5 sm:p-2 rounded-full text-green-600">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-bakery-chocolate/40 uppercase tracking-wider">Quality Guaranteed</p>
                  <p className="text-xs sm:text-sm font-bold text-bakery-chocolate">Freshly Baked Daily</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 z-20 bg-primary-600 text-white p-4 sm:p-6 rounded-full shadow-xl animate-pulse-slow">
              <p className="text-center">
                <span className="block text-xl sm:text-2xl font-bold">100%</span>
                <span className="text-[8px] sm:text-[10px] uppercase tracking-tighter">Handmade</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

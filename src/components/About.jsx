import React from 'react';
import { ceoNoBg } from '../assets';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Team/CEO Section */}
          <div className="relative group flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-100 to-secondary-100 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
              {/* Dotted Border Container */}
              <div className="absolute inset-0 border-4 border-dashed border-primary-600 rounded-full animate-spin-slow"></div>
              
              {/* Image Container */}
              <div className="relative w-[85%] h-[85%] bg-white rounded-full overflow-hidden shadow-2xl flex items-center justify-center">
                <img
                  src={ceoNoBg}
                  alt="CEO Patience"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bakery-chocolate/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-center">
                  <h4 className="text-xl font-display font-bold text-white mb-1">Patience</h4>
                  <p className="text-white/80 text-sm font-medium">Founder & Head Baker</p>
                </div>
              </div>
            </div>
            
            {/* Decorative badge */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white rounded-full p-2 shadow-2xl animate-spin-slow md:block hidden">
              <div className="w-full h-full rounded-full border-2 border-dashed border-primary-600 flex items-center justify-center p-4">
                <p className="text-[10px] font-bold text-bakery-chocolate text-center uppercase tracking-tighter">
                  Crafting Sweetness • Since Day One • With Patience •
                </p>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-12">
            <div>
              <h2 className="text-base font-bold text-primary-600 uppercase tracking-widest mb-4">The Baker Behind the Brand</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-bakery-chocolate mb-6">
                Meet <span className="text-primary-600">Patience</span>
              </h3>
              <p className="text-lg text-bakery-chocolate/70 leading-relaxed mb-8">
                At Patience Bakes, we believe that the secret ingredient to every perfect cake is, quite literally, patience. Located in the heart of Kandemba, we bring passion and precision to every recipe.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-bakery-cream/30 border border-bakery-cream hover:border-primary-200 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 text-primary-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-bakery-chocolate mb-2">Location</h4>
                <p className="text-bakery-chocolate/60">Kandemba, Main Street</p>
              </div>

              <div className="p-6 rounded-2xl bg-bakery-cream/30 border border-bakery-cream hover:border-primary-200 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 text-primary-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-bakery-chocolate mb-2">Working Hours</h4>
                <p className="text-bakery-chocolate/60 italic">Not Fixed - We bake when you need us!</p>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-bakery-chocolate text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600 rounded-full blur-[80px] opacity-20"></div>
              <h4 className="text-xl font-display font-bold mb-4">Visit Us</h4>
              <p className="text-white/70 mb-6">
                Come smell the aroma of freshly baked goods and pick up your pre-ordered treats at the agreed time.
              </p>
              <button className="px-6 py-3 rounded-xl bg-white text-bakery-chocolate font-bold hover:bg-primary-100 transition-colors">
                Get Directions
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useState, useEffect } from 'react';
import { allProducts } from '../products';
import { ProductCard } from '../components/Products';
import SkeletonCard from '../components/SkeletonCard';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const Cafeteria = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', ...new Set(allProducts.map(p => p.category))];

  const filteredProducts = activeFilter === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeFilter);

  return (
    <div className="pt-20">
      <section className="bg-bakery-chocolate text-white py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-600 rounded-full blur-[100px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-display font-bold mb-6"
          >
            Our <span className="text-primary-600 italic">Cafeteria</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Welcome to our sweet corner. Browse through our freshly baked delights, from artisan cakes to savory treats, all crafted with love and patience.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-200 -translate-y-1' 
                    : 'bg-bakery-cream/30 text-bakery-chocolate hover:bg-bakery-cream hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {isLoading ? (
              // Skeleton Loaders
              [...Array(8)].map((_, i) => <SkeletonCard key={i} />)
            ) : (
              <AnimatePresence mode='popLayout'>
                {filteredProducts.map((product, index) => (
                  <motion.div
                    layout
                    key={product.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={product} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>

          {!isLoading && filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-bakery-chocolate/60 text-xl italic">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-bakery-chocolate rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                Don't see what you're <span className="text-primary-600 italic">looking for?</span>
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto text-lg">
                We specialize in custom creations for every occasion. Let us bake your vision into reality.
              </p>
              <a
                href="/order"
                className="inline-flex items-center gap-3 bg-white text-bakery-chocolate px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-600 hover:text-white transition-all shadow-2xl hover:-translate-y-1"
              >
                Place a Custom Order
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cafeteria;

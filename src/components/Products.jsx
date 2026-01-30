import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { allProducts } from '../products';
import { useNavigate } from 'react-router-dom';

// Sound effect utility
const playPop = () => {
  const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
  audio.volume = 0.2;
  audio.play().catch(() => {});
};

export const ProductCard = ({ product, index }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem('pb_favorites') || '[]');
    return favorites.includes(product.name);
  });

  const handleOrderClick = (e) => {
    e.preventDefault();
    playPop();
    navigate('/order', { state: { product: product.name } });
  };

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    playPop();
    const favorites = JSON.parse(localStorage.getItem('pb_favorites') || '[]');
    let newFavorites;
    if (favorites.includes(product.name)) {
      newFavorites = favorites.filter(fav => fav !== product.name);
    } else {
      newFavorites = [...favorites, product.name];
    }
    localStorage.setItem('pb_favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-[450px] w-full perspective-1000"
    >
      <div className="relative h-full w-full transition-all duration-500 preserve-3d group-hover:rotate-y-12">
        {/* Background Shape */}
        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-[3rem] transform skew-y-2 group-hover:skew-y-0 transition-transform duration-500`}></div>
        
        {/* Card Content */}
        <div className="relative h-full p-6 flex flex-col">
          {/* Image Container with organic shape */}
          <div className="relative h-48 mb-6 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-[2rem] shadow-inner"></div>
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-500"
            />
            {/* Price Tag */}
            <div className="absolute -top-4 -right-4 bg-bakery-chocolate text-white px-4 py-2 rounded-full font-bold shadow-lg transform rotate-12 group-hover:rotate-0 transition-all">
              {product.price}
            </div>
            
            {/* Favorite Heart Icon */}
            <button 
              onClick={toggleFavorite}
              className={`absolute top-4 left-4 p-2 rounded-full bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-110 ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
            >
              <svg className={`w-6 h-6 ${isFavorite ? 'fill-current' : 'fill-none'}`} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          {/* Text Details */}
          <div className="flex-grow space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary-600"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-600">
                {product.category}
              </span>
            </div>
            <h3 className="text-2xl font-display font-bold text-bakery-chocolate leading-tight">
              {product.name}
            </h3>
            <p className="text-sm text-bakery-chocolate/60 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Action Button */}
          <button 
            onClick={handleOrderClick}
            className="mt-4 w-full py-4 bg-white text-bakery-chocolate font-bold rounded-2xl shadow-sm border border-bakery-chocolate/5 hover:bg-bakery-chocolate hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          >
            Order Now
            <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
        
        {/* Decorative dots */}
        <div className="absolute top-10 right-10 flex gap-1">
          <div className="w-1 h-1 rounded-full bg-primary-400"></div>
          <div className="w-1 h-1 rounded-full bg-primary-400"></div>
          <div className="w-1 h-1 rounded-full bg-primary-400"></div>
        </div>
      </div>
    </motion.div>
  );
};

const Products = ({ items = allProducts.slice(0, 8), title = "Signature Delights", subtitle = "Freshly Baked" }) => {
  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-50 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary-50 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8"
        >
          <div className="space-y-4">
            <h2 className="text-base font-bold text-primary-600 uppercase tracking-[0.3em]">{subtitle}</h2>
            <h3 className="text-5xl md:text-6xl font-display font-bold text-bakery-chocolate">
              {title.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? "text-primary-600 italic" : ""}>{word} </span>
              ))}
            </h3>
          </div>
          <p className="text-bakery-chocolate/60 max-w-sm text-lg italic">
            "Experience the magic of patience in every bite."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          <AnimatePresence>
            {items.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-primary-100 blur-2xl opacity-50"></div>
            <a
              href="/cafeteria"
              onClick={() => playPop()}
              className="relative inline-flex items-center gap-3 bg-bakery-chocolate text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-600 transition-all shadow-2xl hover:-translate-y-1"
            >
              Explore Full Cafeteria
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;

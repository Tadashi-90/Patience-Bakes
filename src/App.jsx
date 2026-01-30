import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import About from './components/About';
import Terms from './components/Terms';
import FAQ from './components/FAQ';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CustomCursor from './components/CustomCursor';
import Cafeteria from './pages/Cafeteria';
import Order from './pages/Order';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const Home = () => (
  <>
    <Hero />
    <HowItWorks />
    <Products />
    <Services />
    <About />
    <Terms />
    <FAQ />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cafeteria" element={<Cafeteria />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <CustomCursor />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import HeroCarousel from './components/HeroBanner';
import Timeline from './components/Timeline';
import Services from './pages/Services';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* Hero Section and Additional Components */}
          <Route path="/herobanner" element={<HeroCarousel />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/services" element={<Services />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          


          {/* Product Details */}
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

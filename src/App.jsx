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
import Cart from './components/Cart';
import CartProvider from "./context/CartContext";
  // ✅ Import the provider

function App() {
  return (
    <CartProvider>  {/* ✅ Wrap everything inside CartProvider */}
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

            {/* Additional Components */}
            <Route path="/herobanner" element={<HeroCarousel />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/services" element={<Services />} />

            {/* Product Details & Cart */}
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

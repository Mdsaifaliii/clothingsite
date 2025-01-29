import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import Products from '../pages/Products';

const Home = () => (
  <div>
    <HeroBanner />
    <section className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Map through featured products */}
        {[1, 2, 3, 4].map((product, index) => (
          <ProductCard
            key={index}
            image="/path/to/image.jpg"
            name={`Product ${index + 1}`}
            price={`$${(index + 1) * 20}`}
            rating={4.5}
            onAddToCart={() => alert('Added to Cart')}
          />
        ))}
      </div>
    </section>
    <TestimonialsCarousel />
  </div>
);

export default Home;
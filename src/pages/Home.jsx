import React from 'react';
import HeroBanner from '../components/HeroBanner';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import FAQAccordion from '../components/FAQAccordion';
import Products from './Products';

const Home = () => {
  return (
    <div>
      <HeroBanner />

      <section className="py-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">New Arrivals</h2>
        <h1 className="text-xl font-semibold text-center mb-2">Latest collections arrive's are here!</h1>
        <Products />
      </section>

      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Customer Testimonials</h2>
        <TestimonialsCarousel />
      </section>
      <section className="py-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <FAQAccordion />
      </section>

    </div>
  );
};

export default Home;
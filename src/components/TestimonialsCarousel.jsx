import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TestimonialsCarousel = () => {
  const testimonials = [
    { name: "John Doe", feedback: "Amazing store with great products!" },
    { name: "Jane Smith", feedback: "I love their collection and service." },
    { name: "Mike Johnson", feedback: "Fast delivery and great quality." },
  ];

  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="p-6 bg-gray-100 text-center">
          <p className="text-lg italic">"{testimonial.feedback}"</p>
          <p className="mt-4 font-bold">- {testimonial.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default TestimonialsCarousel;
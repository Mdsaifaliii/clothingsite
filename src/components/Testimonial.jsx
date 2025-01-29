import React from 'react';

const testimonials = [
  {
    name: "John Doe",
    feedback: "This is the best shopping experience I've ever had! The clothes are top-notch, and the service was excellent.",
    image: "path/to/testimonial1.jpg"
  },
  {
    name: "Jane Smith",
    feedback: "Amazing quality and great prices. I'm definitely coming back for more!",
    image: "path/to/testimonial2.jpg"
  },
  {
    name: "Michael Johnson",
    feedback: "Fast shipping and beautiful clothes! I'm very satisfied with my purchase.",
    image: "path/to/testimonial3.jpg"
  }
];

const Testimonials = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">What Our Customers Are Saying</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded shadow-lg">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center">{testimonial.name}</h3>
            <p className="mt-2 text-gray-600 text-center">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
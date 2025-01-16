import React from 'react';

const services = [
  { title: 'Fast Shipping', description: 'Receive your products within 3-5 business days.' },
  { title: '24/7 Customer Support', description: 'Contact us anytime for assistance.' },
  { title: 'Easy Returns', description: 'Hassle-free return process for all orders.' }
];

const Services = () => {
  return (
    <div className="p-4 bg-white border border-gray-200 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-md shadow-sm">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

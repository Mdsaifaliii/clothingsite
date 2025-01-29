import React from 'react';
import { FaShippingFast, FaHeadset, FaUndo } from 'react-icons/fa';

const services = [
  {
    icon: <FaShippingFast className="text-yellow-500 text-4xl mb-2" />,
    title: 'Fast Shipping',
    description: 'Receive your products within 3-5 business days.',
    process: ['Order Received', 'Packed & Shipped', 'Delivered'],
    benefits: ['Track your order in real-time', 'Reliable delivery partners'],
    animationDelay: '0.2s',
  },
  {
    icon: <FaHeadset className="text-blue-500 text-4xl mb-2" />,
    title: '24/7 Customer Support',
    description: 'Contact us anytime for assistance.',
    process: ['Submit Query', 'Agent Assigned', 'Issue Resolved'],
    benefits: ['Multi-channel support (email, chat, call)', 'Quick response time'],
    animationDelay: '0.4s',
  },
  {
    icon: <FaUndo className="text-green-500 text-4xl mb-2" />,
    title: 'Easy Returns',
    description: 'Hassle-free return process for all orders.',
    process: ['Initiate Return', 'Product Picked Up', 'Refund Processed'],
    benefits: ['No questions asked', 'Full refund within 7 days'],
    animationDelay: '0.6s',
  },
];

const Services = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Our Premium Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            style={{ animation: `fadeIn ${service.animationDelay}` }}
          >
            <div className="text-center mb-4">
              {service.icon}
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Process:</h4>
              <ul className="list-decimal list-inside text-gray-600 space-y-1 mb-4">
                {service.process.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Why Choose Us:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
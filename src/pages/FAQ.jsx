import React from 'react';
import FAQAccordion from './FAQAccordion';

const FAQ = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <FAQAccordion />
    </div>
  );
};

export default FAQ;

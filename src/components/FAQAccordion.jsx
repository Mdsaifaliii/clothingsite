import React, { useState } from 'react';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    { question: 'What is your return policy?', answer: 'You can return items within 30 days.' },
    { question: 'Do you offer free shipping?', answer: 'Free shipping is available on orders over $50.' },
    { question: 'How can I track my order?', answer: 'You will receive an email with a tracking number after your order is shipped.' }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-4 bg-white border border-gray-200 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2">
          <button
            className="w-full text-left py-2 px-4 border border-gray-300 rounded-md focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-gray-100 mt-2 border border-gray-300 rounded-md">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;

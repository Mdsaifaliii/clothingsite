import React, { useState } from 'react';

const Timeline = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const events = [
    {
      year: '2010',
      title: 'Founding',
      description:
        'Our company was founded with a vision to deliver high-quality and affordable fashion.',
      details: 'During this year, our team of passionate individuals came together to start a journey that continues to grow stronger every year.',
    },
    {
      year: '2015',
      title: 'First Product Launch',
      description: 'Launched our first product line, which was a huge success.',
      details: 'We introduced our initial product line focusing on sustainable and stylish designs. Customers loved our unique approach to fashion.',
    },
    {
      year: '2020',
      title: 'Expanded Online Presence',
      description: 'Started selling products online and expanded globally.',
      details: 'With the rise of e-commerce, we adapted quickly by launching a user-friendly online store, making our products accessible worldwide.',
    },
    {
      year: '2023',
      title: 'Award-Winning Brand',
      description: 'Recognized as the best sustainable fashion brand.',
      details: 'Our dedication to sustainable practices and innovative designs earned us this prestigious award, motivating us to achieve more.',
    },
  ];

  const toggleDetails = (index) => {
    setExpandedEvent(index === expandedEvent ? null : index);
  };

  return (
    <div className="p-6 bg-gray-50 border border-gray-200 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Journey</h2>
      <ul className="relative">
        {events.map((event, index) => (
          <li key={index} className="mb-8 flex items-start">
            {/* Year Badge */}
            <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">
              {event.year}
            </div>
            {/* Event Details */}
            <div className="ml-6 flex-1">
              <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
              {/* Toggle Details */}
              <button
                onClick={() => toggleDetails(index)}
                className="text-blue-500 hover:text-blue-700 mt-2 text-sm font-semibold"
              >
                {expandedEvent === index ? 'Read Less' : 'Read More'}
              </button>
              {/* Extra Details */}
              {expandedEvent === index && (
                <div className="mt-2 text-gray-500 text-sm border-l-2 border-blue-500 pl-4">
                  {event.details}
                </div>
              )}
            </div>
          </li>
        ))}
        {/* Timeline Line */}
        <div className="absolute top-0 left-6 w-1 bg-blue-200 h-full z-0"></div>
      </ul>
    </div>
  );
};

export default Timeline;

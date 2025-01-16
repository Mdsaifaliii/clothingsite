import React from 'react';

const Timeline = () => {
  const events = [
    { year: '2010', title: 'Founding', description: 'Our company was founded.' },
    { year: '2015', title: 'First Product Launch', description: 'Launched our first product line.' },
    { year: '2020', title: 'Expanded Online Presence', description: 'Started selling products online.' }
  ];

  return (
    <div className="p-4 bg-white border border-gray-200 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li key={index} className="flex items-center">
            <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full">{event.year}</div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;

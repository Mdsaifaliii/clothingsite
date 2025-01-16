import React from 'react';
import Timeline from '../components/Timeline';

const About = () => (
  <div className="py-10">
    <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
    <section className="px-6 md:px-10 lg:px-20">
      <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
      <p className="mb-6">
        At Clothing Store, our mission is to deliver top-quality fashion that blends style and comfort.
      </p>
      <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
      <Timeline />
      <h2 className="text-3xl font-bold mt-10 mb-4">Meet Our Team</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {["Alice", "Bob", "Charlie"].map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={`/path/to/team/${member.toLowerCase()}.jpg`}
              alt={member}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">{member}</h3>
            <p>Fashion Designer</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default About;

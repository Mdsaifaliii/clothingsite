import React from 'react';
import Timeline from '../components/Timeline';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

// Mock data for team members
const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'Creative Director',
    image: 'https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_hybrid', // Replace with actual image URLs
    bio: 'Alice oversees the creative direction of our brand and ensures every piece reflects elegance and style.',
    social: {
      linkedIn: 'https://linkedin.com/in/alicejohnson',
      twitter: 'https://twitter.com/alicejohnson',
    },
  },
  {
    name: 'Bob Smith',
    role: 'Head of Marketing',
    image: 'https://img.freepik.com/free-photo/elegant-man-with-folded-arms_1262-727.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_hybrid',
    bio: 'Bob leads our marketing strategies, ensuring we connect with our customers effectively.',
    social: {
      linkedIn: 'https://linkedin.com/in/bsmith',
      twitter: 'https://twitter.com/bsmith',
    },
  },
  {
    name: 'Charlie Brown',
    role: 'Lead Designer',
    image: 'https://img.freepik.com/free-photo/customer-service-cute-guy-grey-suit-with-computer-headset-with-hand-chin_140725-164289.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_hybrid',
    bio: 'Charlie designs our collections, blending modern trends with timeless style.',
    social: {
      linkedIn: 'https://linkedin.com/in/charliebrown',
      twitter: 'https://twitter.com/charliebrown',
    },
  },
];

const About = () => (
  <div className="py-10 bg-gray-50">
    <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">About Us</h1>
    <section className="px-6 md:px-10 lg:px-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
      <p className="text-gray-600 mb-6">
        At Clothing Store, our mission is to deliver top-quality fashion that blends style and comfort.
        We strive to create designs that empower our customers and inspire confidence.
      </p>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey</h2>
      <Timeline />
      <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-800">Meet Our Team</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-800 text-center">{member.name}</h3>
            <p className="text-gray-600 text-center mb-4">{member.role}</p>
            <p className="text-sm text-gray-500 text-center mb-4">{member.bio}</p>
            <div className="flex justify-center space-x-4">
              <a
                href={member.social.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition duration-200 text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition duration-200 text-2xl"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
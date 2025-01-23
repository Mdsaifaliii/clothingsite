import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-black text-white py-8">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Quick Links Section */}
      <div>
        <h3 className="text-lg font-bold text-yellow-400 mb-4">Quick Links</h3>
        <ul className="space-y-3">
          <li>
            <Link to="/privacy" className="hover:text-yellow-300">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="hover:text-yellow-300">
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>

      {/* Follow Us Section */}
      <div>
        <h3 className="text-lg font-bold text-yellow-400 mb-4">Follow Us</h3>
        <ul className="flex space-x-6">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              <FaFacebookF size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              <FaInstagram size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              <FaTwitter size={24} />
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-lg font-bold text-yellow-400 mb-4">Contact</h3>
        <p className="mb-2">
          Email: <span className="text-yellow-300">support@Wearluxe.com</span>
        </p>
        <p>
          Phone: <span className="text-yellow-300">+123 456 7890</span>
        </p>
      </div>
    </div>

    {/* Newsletter and Copyright */}
    <div className="border-t border-gray-700 mt-8 pt-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Wearluxe. All rights reserved.
        </p>
        <form className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-md bg-gray-800 text-white focus:ring-2 focus:ring-yellow-400"
          />
          <button className="p-2 bg-yellow-400 hover:bg-yellow-500 rounded-r-md text-black">
            Send
          </button>
        </form>
      </div>
    </div>
  </footer>
);

export default Footer;


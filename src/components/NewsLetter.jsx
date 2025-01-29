import React from "react";

const Newsletter = () => (
  <div className="bg-yellow-400 py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated</h2>
      <p className="text-gray-700 mb-6">
        Sign up for our newsletter to receive exclusive offers and the latest news.
      </p>
      <form className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-l-md border-none focus:ring-2 focus:ring-gray-500"
        />
        <button className="bg-gray-800 text-white py-2 px-6 rounded-r-md hover:bg-gray-900">
          Subscribe
        </button>
      </form>
    </div>
  </div>
);

export default Newsletter;
import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ id, image, name, price, rating, description }) => (
  <div className="border rounded-md shadow-lg hover:shadow-xl p-4 bg-white">
    <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-md" />
    <div className="p-4">
      <h2 className="font-bold text-lg mb-2">{name}</h2>
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={`text-yellow-500 ${i < rating ? "filled" : "opacity-50"}`} />
        ))}
      </div>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-800 font-bold mb-4">₹{price}</p>
      <Link
        to={`/product/${id}`}
        className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-700 block text-center"
      >
        Buy Now
      </Link>
    </div>
  </div>
);

export default ProductCard;
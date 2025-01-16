import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const RelatedProducts = ({ products }) => {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-md shadow-md p-4 hover:shadow-lg transition-transform hover:scale-105 bg-white"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-yellow-500 ${i < product.rating ? "filled" : "opacity-50"}`}
                  />
                ))}
              </div>
              <p className="text-gray-800 font-bold">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

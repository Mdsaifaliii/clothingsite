import React, { useState } from "react";

const DynamicPricing = ({ basePrice, discount }) => {
  const [quantity, setQuantity] = useState(1);

  const calculatePrice = () => {
    const discountedPrice = basePrice - (basePrice * discount) / 100 ;
    return discountedPrice * quantity;
  };

  return (
    <div className="mb-4">
      <h3 className="font-bold mb-2">Price: ₹{calculatePrice().toFixed(2)}</h3>
      <div className="flex items-center space-x-3">
        <button
          className="px-3 py-2 bg-gray-300 rounded-md"
          onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="px-3 py-2 bg-gray-300 rounded-md"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default DynamicPricing;
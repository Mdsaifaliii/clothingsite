// src/components/ProductVariants.jsx
import React, { useState } from "react";

const ProductVariants = ({ variants, onSelectVariant }) => {
  const [selectedVariant, setSelectedVariant] = useState("");

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
    onSelectVariant(variant);
  };

  return (
    <div className="mb-4">
      <h3 className="font-bold mb-2">Select Variant</h3>
      <div className="flex space-x-3">
        {variants.map((variant, index) => (
          <button
            key={index}
            onClick={() => handleVariantChange(variant)}
            className={`px-4 py-2 border rounded-md ${
              selectedVariant === variant ? "bg-yellow-400" : "bg-gray-100"
            }`}
          >
            {variant}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductVariants;
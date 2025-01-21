import React from 'react';

const FilterBar = ({ onFilterChange }) => {
  return (
    <div className="p-4 bg-gray-100 border-t border-gray-200 flex justify-between items-center">
      <select
        className="p-2 border rounded-md"
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="">All Products</option>
        <option value="clothing">Clothing</option>
        <option value="accessories">Accessories</option>
        <option value="footwear">Footwear</option>
      </select>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border rounded-md w-48"
      />
    </div>
  );
};

export default FilterBar;

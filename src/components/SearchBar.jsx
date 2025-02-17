import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Import search icon from react-icons

const SearchBar = ({ products, onSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);

    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        (product.category && product.category.toLowerCase().includes(searchTerm))
    );

    onSearchResults(filteredProducts);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto mt-4">
      <FiSearch className="absolute left-4 top-3 text-gray-400 text-xl" />
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={handleSearch}
        className="w-full pl-12 pr-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
      />
    </div>
  );
};

export default SearchBar;

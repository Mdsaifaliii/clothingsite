import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    // Fetch product details from an API or static data
    setWishlist(savedWishlist);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {wishlist.map((productId) => (
          <ProductCard key={productId} productId={productId} />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;

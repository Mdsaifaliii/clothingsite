import React, { useState } from "react";

const WishlistButton = ({ productId }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted((prev) => !prev);
    // Save to localStorage or database
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!isWishlisted) {
      localStorage.setItem("wishlist", JSON.stringify([...wishlist, productId]));
    } else {
      localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist.filter((id) => id !== productId))
      );
    }
  };

  return (
    <button
      onClick={toggleWishlist}
      className={`py-2 px-4 rounded-md ${
        isWishlisted ? "bg-red-500 text-white" : "bg-gray-200 text-black"
      }`}
    >
      {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
    </button>
  );
};

export default WishlistButton;
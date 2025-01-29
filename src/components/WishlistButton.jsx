import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const WishlistButton = ({ productId, onWishlistToggle }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    onWishlistToggle(productId, !isWishlisted);
  };

  return (
    <button
      className="flex items-center space-x-2 text-gray-600 hover:text-red-500"
      onClick={handleWishlistToggle}
    >
      {isWishlisted ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
      <span>{isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}</span>
    </button>
  );
};

export default WishlistButton;
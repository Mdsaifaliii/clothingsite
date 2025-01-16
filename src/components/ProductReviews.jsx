import React from "react";
import { FaStar } from "react-icons/fa";

const ProductReviews = ({ reviews }) => (
  <div className="space-y-4">
    {reviews.map((review) => (
      <div key={review.id} className="p-4 bg-gray-100 rounded-md shadow">
        <h3 className="font-bold">{review.user}</h3>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < review.rating ? "text-yellow-500" : "text-gray-300"} />
          ))}
        </div>
        <p className="text-gray-600">{review.comment}</p>
      </div>
    ))}
  </div>
);

export default ProductReviews;

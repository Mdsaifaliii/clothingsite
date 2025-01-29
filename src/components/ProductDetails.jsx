import React, { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, user: "Alice", rating: 4, comment: "Great product!" },
    { id: 2, user: "Bob", rating: 5, comment: "Absolutely loved it!" },
  ]);

  const [newReview, setNewReview] = useState({ user: "", rating: 0, comment: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newReview.user || !newReview.rating || !newReview.comment) {
      setError("All fields are required.");
      return;
    }

    setReviews([...reviews, { ...newReview, id: Date.now() }]);
    setNewReview({ user: "", rating: 0, comment: "" });
    setError(""); // Clear error on successful submission
  };

  const averageRating =
    reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;

  return (
    <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Customer Reviews</h2>

      {/* Average Rating */}
      <div className="text-center mb-6">
        <p className="text-xl font-semibold">
          Average Rating:{" "}
          <span className="text-yellow-500 font-bold">
            {averageRating.toFixed(1)} / 5
          </span>
        </p>
        <div className="flex justify-center">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-yellow-500 text-2xl ${
                i < Math.round(averageRating) ? "fill-current" : "opacity-30"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Review List */}
      <div className="space-y-4">
        {reviews.length ? (
          reviews.map((review) => (
            <div
              key={review.id}
              className="p-4 bg-white border border-gray-300 rounded-lg shadow-md"
            >
              <h3 className="font-bold text-gray-800">{review.user}</h3>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-yellow-500 text-lg ${
                      i < review.rating ? "fill-current" : "opacity-30"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mt-2">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No reviews yet.</p>
        )}
      </div>

      {/* Review Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-300"
      >
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Leave a Review</h3>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-1">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={newReview.user}
            onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-1">Rating</label>
          <select
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="0">Select a rating</option>
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star} Star{star > 1 && "s"}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-1">Your Review</label>
          <textarea
            placeholder="Write your review here"
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Reviews;
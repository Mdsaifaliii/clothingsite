import React, { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, user: "Alice", rating: 4, comment: "Great product!" }
  ]);
  const [newReview, setNewReview] = useState({ user: "", rating: 0, comment: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { ...newReview, id: Date.now() }]);
  };

  return (
    <div>
      <h3>Customer Reviews</h3>
      {reviews.map((review) => (
        <div key={review.id}>
          <strong>{review.user}</strong>
          <span>{'⭐'.repeat(review.rating)}</span>
          <p>{review.comment}</p>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
        />
        <select
          onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>{star} Star</option>
          ))}
        </select>
        <textarea
          placeholder="Your Review"
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Reviews;

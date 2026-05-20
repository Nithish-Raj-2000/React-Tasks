import React from "react";
import "../styles/ReviewCard.css";

export const ReviewCard = ({ review }) => {
  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <div className="review-card">
      <div className="review-header">
        <h4 className="reviewer-name">{review.name}</h4>
        <span className="review-rating">{renderStars(review.rating)}</span>
      </div>

      <p className="review-destination">Destination: {review.destination}</p>

      <p className="review-text">"{review.text}"</p>

      <div className="review-footer">
        <span className="verified-badge">✓ Verified Review</span>
      </div>
    </div>
  );
};

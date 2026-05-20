import React from "react";
import "../styles/PackageCard.css";

export const PackageCard = ({ package: pkg, onBook }) => {
  return (
    <div className="package-card">
      <div className="card-image-container">
        <img src={pkg.image} alt={pkg.name} className="card-image" />
        <div className="card-price">Rs.{pkg.price}</div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{pkg.name}</h3>

        <div className="card-destination">
          <span className="destination-icon">📍</span>
          <span>{pkg.destination}</span>
        </div>

        <p className="card-duration">⏱️ {pkg.duration}</p>

        <p className="card-description">{pkg.description}</p>

        <div className="card-rating">
          <span className="stars">⭐ {pkg.rating}</span>
          <span className="reviews">({pkg.reviews} reviews)</span>
        </div>

        <button className="book-btn" onClick={() => onBook(pkg)}>
          Book Now
        </button>
      </div>
    </div>
  );
};

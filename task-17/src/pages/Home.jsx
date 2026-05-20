import React, { useState } from "react";
import { useTravel } from "../context/TravelContext";
import { PackageCard } from "../components/PackageCard";
import { ReviewCard } from "../components/ReviewCard";
import { Hero } from "../components/Hero";
import "../styles/Home.css";

export const Home = () => {
  const { packages, reviews, addBooking } = useTravel();
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleBook = (pkg) => {
    setSelectedPackage(pkg);
    setShowBookingModal(true);
  };

  const handleConfirmBooking = () => {
    if (selectedPackage) {
      addBooking({
        package: selectedPackage.name,
        destination: selectedPackage.destination,
        price: selectedPackage.price,
        date: new Date().toISOString(),
        status: "Pending",
      });
      setShowBookingModal(false);
      alert("Booking confirmed! We'll contact you soon.");
    }
  };

  return (
    <div className="home">
      <Hero
        title="Explore the World with Us"
        subtitle="Discover amazing destinations and create unforgettable memories"
        backgroundImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600"
        ctaText="Start Your Journey"
        ctaLink="#packages"
      />

      <section className="featured-packages">
        <div className="section-container">
          <h2 className="section-title">Featured Packages</h2>
          <p className="section-subtitle">Choose from our most popular travel packages</p>

          <div className="packages-grid">
            {packages.slice(0, 3).map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} onBook={handleBook} />
            ))}
          </div>

          <div className="view-all-btn-container">
            <a href="/packages" className="view-all-btn">
              View All Packages →
            </a>
          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="section-container">
          <h2 className="section-title">Why Choose Us?</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Best Prices</h3>
              <p>We offer the most competitive prices in the market with exclusive deals.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">👥</div>
              <h3>Expert Guides</h3>
              <p>Our experienced guides ensure you have the best travel experience.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Safety First</h3>
              <p>Your safety and security are our top priorities on every trip.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">24/7</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support for any emergencies or queries.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>Global Network</h3>
              <p>We have partnerships in over 100 countries worldwide.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">✈️</div>
              <h3>Easy Booking</h3>
              <p>Simple and secure online booking process with instant confirmation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="customer-reviews">
        <div className="section-container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Real experiences from real travelers</p>

          <div className="reviews-grid">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready for Your Next Adventure?</h2>
          <p>Join thousands of happy travelers who have experienced the world with us</p>
          <a href="/contact" className="cta-button-large">
            Get Started Today
          </a>
        </div>
      </section>

      {showBookingModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowBookingModal(false)}>
              ✕
            </button>
            <h2>Confirm Booking</h2>
            {selectedPackage && (
              <>
                <p>
                  <strong>Package:</strong> {selectedPackage.name}
                </p>
                <p>
                  <strong>Destination:</strong> {selectedPackage.destination}
                </p>
                <p>
                  <strong>Duration:</strong> {selectedPackage.duration}
                </p>
                <p>
                  <strong>Price:</strong> ${selectedPackage.price}
                </p>
              </>
            )}
            <button className="confirm-btn" onClick={handleConfirmBooking}>
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

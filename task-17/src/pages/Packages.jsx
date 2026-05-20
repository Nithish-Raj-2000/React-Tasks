import React, { useState } from "react";
import { useTravel } from "../context/TravelContext";
import { PackageCard } from "../components/PackageCard";
import { Hero } from "../components/Hero";
import "../styles/Packages.css";

export const Packages = () => {
  const { packages, addBooking } = useTravel();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const categories = [
    { id: "all", name: "All Packages" },
    { id: "budget", name: "Budget" },
    { id: "mid", name: "Mid-Range" },
    { id: "luxury", name: "Luxury" },
  ];

  const getPackageCategory = (price) => {
    if (price < 50000) return "budget";
    if (price < 140000) return "mid";
    return "luxury";
  };

  const filteredPackages = packages.filter((pkg) => {
    const matchesCategory =
      selectedCategory === "all" || getPackageCategory(pkg.price) === selectedCategory;
    const matchesPrice = pkg.price >= priceRange[0] && pkg.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

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
    <div className="packages">
      <Hero
        title="Our Travel Packages"
        subtitle="Explore our diverse collection of curated travel experiences"
        backgroundImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600"
      />

      <section className="packages-section">
        <div className="section-container">
          <div className="filters-container">
            <div className="filter-group">
              <h3>Category</h3>
              <div className="category-buttons">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`category-btn ${selectedCategory === cat.id ? "active" : ""}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <h3>Price Range</h3>
              <input
                type="range"
                min="30000"
                max="300000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="price-slider"
              />
              <div className="price-display">
                Rs.{priceRange[0]} - Rs.{priceRange[1]}
              </div>
            </div>
          </div>

          <div className="packages-grid">
            {filteredPackages.length > 0 ? (
              filteredPackages.map((pkg) => <PackageCard key={pkg.id} package={pkg} onBook={handleBook} />)
            ) : (
              <div className="no-results">
                <p>No packages found matching your filters. Please try adjusting your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="special-destinations">
        <div className="section-container">
          <h2 className="section-title">Popular Destinations</h2>
          <div className="destinations-grid">
            {[
              { emoji: "🏝️", name: "Bali", packages: "15+ packages" },
              { emoji: "🗼", name: "France", packages: "12+ packages" },
              { emoji: "🏮", name: "Japan", packages: "10+ packages" },
              { emoji: "🏔️", name: "Switzerland", packages: "8+ packages" },
              { emoji: "🌴", name: "Maldives", packages: "9+ packages" },
              { emoji: "🗽", name: "USA", packages: "20+ packages" },
            ].map((dest, index) => (
              <div key={index} className="destination-card">
                <div className="destination-emoji">{dest.emoji}</div>
                <h3>{dest.name}</h3>
                <p>{dest.packages}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-book-with-us">
        <div className="section-container">
          <h2 className="section-title">Why Book With Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="icon">💰</span>
              <h3>Best Price Guarantee</h3>
              <p>We guarantee the best prices for all packages or we'll match any competitor's offer</p>
            </div>
            <div className="benefit-item">
              <span className="icon">🛡️</span>
              <h3>Secure Booking</h3>
              <p>Your payment is secure and encrypted with latest SSL technology</p>
            </div>
            <div className="benefit-item">
              <span className="icon">🔄</span>
              <h3>Easy Modifications</h3>
              <p>Change your travel dates or package with our flexible booking policy</p>
            </div>
            <div className="benefit-item">
              <span className="icon">🤝</span>
              <h3>Expert Support</h3>
              <p>Our travel experts are here to help you 24/7 throughout your journey</p>
            </div>
          </div>
        </div>
      </section>

      {showBookingModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowBookingModal(false)}>
              ✕
            </button>
            <h2>Confirm Your Booking</h2>
            {selectedPackage && (
              <>
                <div className="booking-details">
                  <img src={selectedPackage.image} alt={selectedPackage.name} />
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
                </div>
              </>
            )}
            <button className="confirm-btn" onClick={handleConfirmBooking}>
              Proceed to Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

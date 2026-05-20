import React from "react";
import { Hero } from "../components/Hero";
import "../styles/Services.css";

export const Services = () => {
  const services = [
    {
      id: 1,
      icon: "✈️",
      title: "Flight Booking",
      description: "Book flights to any destination worldwide with exclusive deals and competitive prices.",
      details: [
        "Domestic and international flights",
        "Group bookings available",
        "24-hour cancellation support",
        "Flexible payment options",
      ],
    },
    {
      id: 2,
      icon: "🏨",
      title: "Hotel Accommodations",
      description: "Choose from thousands of hotels, resorts, and unique stays tailored to your budget.",
      details: [
        "3-5 star accommodations",
        "Budget-friendly options",
        "Verified reviews and ratings",
        "Best rate guarantee",
      ],
    },
    {
      id: 3,
      icon: "🗺️",
      title: "Tour Planning",
      description: "Customized tour packages designed by local experts for authentic experiences.",
      details: [
        "Personalized itineraries",
        "Local guide service",
        "Cultural immersion experiences",
        "Group and solo tours",
      ],
    },
    {
      id: 4,
      icon: "🛂",
      title: "Visa Assistance",
      description: "Complete visa support and documentation for hassle-free international travel.",
      details: [
        "Visa consultation services",
        "Document preparation",
        "Embassy assistance",
        "Fast-track processing",
      ],
    },
    {
      id: 5,
      icon: "🏥",
      title: "Travel Insurance",
      description: "Comprehensive travel insurance covering medical, baggage, and trip cancellations.",
      details: [
        "Medical coverage",
        "Baggage insurance",
        "Trip cancellation protection",
        "Emergency evacuation",
      ],
    },
    {
      id: 6,
      icon: "🚗",
      title: "Transportation",
      description: "Airport transfers, car rentals, and transportation solutions for your entire trip.",
      details: [
        "Airport pickups",
        "Car rental services",
        "Group transportation",
        "24/7 availability",
      ],
    },
  ];

  return (
    <div className="services">
      <Hero
        title="Our Services"
        subtitle="Comprehensive travel solutions for every adventure"
        backgroundImage="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=600"
      />

      <section className="services-intro">
        <div className="section-container">
          <h2 className="section-title">Everything You Need for Perfect Travel</h2>
          <p className="section-subtitle">
            We offer a complete range of travel services to make your journey seamless and memorable
          </p>
        </div>
      </section>

      <section className="services-grid">
        <div className="section-container">
          <div className="grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <ul className="service-details">
                  {service.details.map((detail, index) => (
                    <li key={index}>✓ {detail}</li>
                  ))}
                </ul>

                <button className="learn-more-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="section-container">
          <h2 className="section-title">How It Works</h2>

          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Browse & Select</h3>
              <p>Explore our packages and select the perfect destination for you</p>
            </div>

            <div className="process-arrow">→</div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Customize</h3>
              <p>Tailor your trip with our travel experts' help</p>
            </div>

            <div className="process-arrow">→</div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Book & Pay</h3>
              <p>Secure booking with flexible payment options</p>
            </div>

            <div className="process-arrow">→</div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Travel & Enjoy</h3>
              <p>Depart with confidence and enjoy your adventure</p>
            </div>
          </div>
        </div>
      </section>

      <section className="special-offers">
        <div className="section-container">
          <h2 className="section-title">Special Offers</h2>

          <div className="offers-grid">
            <div className="offer-card">
              <span className="offer-badge">Limited Time</span>
              <h3>Early Bird Discount</h3>
              <p>Book 3 months in advance and save 20% on your package</p>
            </div>

            <div className="offer-card">
              <span className="offer-badge">Exclusive</span>
              <h3>Group Discounts</h3>
              <p>Group bookings of 10+ get special rates and complimentary guide</p>
            </div>

            <div className="offer-card">
              <span className="offer-badge">Special</span>
              <h3>Honeymoon Package</h3>
              <p>Romantic getaways with special perks for newlyweds</p>
            </div>

            <div className="offer-card">
              <span className="offer-badge">Seasonal</span>
              <h3>Family Bundles</h3>
              <p>Travel with family and enjoy up to 15% savings on total cost</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Planning?</h2>
          <p>Let our travel experts help you create the perfect itinerary</p>
          <a href="/contact" className="cta-button">
            Contact Our Experts
          </a>
        </div>
      </section>
    </div>
  );
};

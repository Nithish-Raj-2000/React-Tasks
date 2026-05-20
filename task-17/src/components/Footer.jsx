import React from "react";
import "../styles/Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Wanderlust</h3>
          <p>Your trusted travel companion for unforgettable adventures around the world.</p>
          <div className="social-links">
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">🐦</a>
            <a href="#" className="social-icon">📷</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#packages">Packages</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Tour Planning</a></li>
            <li><a href="#services">Hotel Booking</a></li>
            <li><a href="#services">Flight Tickets</a></li>
            <li><a href="#services">Visa Assistance</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📍 123 Travel Street, Adventure City, AC 12345</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>✉️ info@wanderlust.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Wanderlust Travel Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

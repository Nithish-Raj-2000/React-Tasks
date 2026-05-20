import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">✈️</span>
          Wanderlust
        </Link>

        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/packages" className="navbar-link" onClick={closeMenu}>
              Packages
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link navbar-link-btn" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

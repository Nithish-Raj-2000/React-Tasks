import React, { useState } from "react";
import { useTravel } from "../context/TravelContext";
import { Hero } from "../components/Hero";
import "../styles/Contact.css";

export const Contact = () => {
  const { submitContactForm, updateFormData, formData, contactMessages } = useTravel();
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-+()]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.destination.trim()) {
      newErrors.destination = "Destination is required";
    }

    if (!formData.travelDate) {
      newErrors.travelDate = "Travel date is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      submitContactForm(formData);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="contact">
      <Hero
        title="Get in Touch"
        subtitle="We're here to help plan your perfect trip"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600"
      />

      <section className="contact-section">
        <div className="section-container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Contact Information</h2>

              <div className="info-item">
                <h3>📍 Address</h3>
                <p>123 Travel Street, Adventure City, AC 12345</p>
              </div>

              <div className="info-item">
                <h3>📞 Phone</h3>
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 987-6543 (International)</p>
              </div>

              <div className="info-item">
                <h3>✉️ Email</h3>
                <p>info@wanderlust.com</p>
                <p>support@wanderlust.com</p>
              </div>

              <div className="info-item">
                <h3>⏰ Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>

              <div className="info-item">
                <h3>🌐 Social Media</h3>
                <div className="social-links">
                  <a href="#" className="social-link">Facebook</a>
                  <a href="#" className="social-link">Twitter</a>
                  <a href="#" className="social-link">Instagram</a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Send us a Message</h2>

              {submitted && (
                <div className="success-message">
                  ✓ Thank you! We've received your message and will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className={errors.name ? "input-error" : ""}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className={errors.email ? "input-error" : ""}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className={errors.phone ? "input-error" : ""}
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="destination">Preferred Destination *</label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className={errors.destination ? "input-error" : ""}
                  >
                    <option value="">Select a destination</option>
                    <option value="Bali, Indonesia">Bali, Indonesia</option>
                    <option value="Paris, France">Paris, France</option>
                    <option value="Tokyo, Japan">Tokyo, Japan</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Maldives">Maldives</option>
                    <option value="New York, USA">New York, USA</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.destination && <span className="error-text">{errors.destination}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="travelDate">Preferred Travel Date *</label>
                  <input
                    type="date"
                    id="travelDate"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleInputChange}
                    className={errors.travelDate ? "input-error" : ""}
                  />
                  {errors.travelDate && <span className="error-text">{errors.travelDate}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your travel plans..."
                    rows="5"
                    className={errors.message ? "input-error" : ""}
                  ></textarea>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {contactMessages.length > 0 && (
        <section className="recent-messages">
          <div className="section-container">
            <h2>Recent Messages ({contactMessages.length})</h2>
            <div className="messages-list">
              {contactMessages.map((msg) => (
                <div key={msg.id} className="message-item">
                  <p>
                    <strong>From:</strong> {msg.name} ({msg.email})
                  </p>
                  <p>
                    <strong>About:</strong> {msg.destination} - {msg.message.substring(0, 100)}...
                  </p>
                  <small>Received: {new Date(msg.createdAt).toLocaleDateString()}</small>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

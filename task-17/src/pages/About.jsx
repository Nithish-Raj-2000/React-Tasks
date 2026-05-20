import React from "react";
import { Hero } from "../components/Hero";
import "../styles/About.css";

export const About = () => {
  return (
    <div className="about">
      <Hero
        title="About Wanderlust"
        subtitle="Your Gateway to Extraordinary Experiences"
        backgroundImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=600"
      />

      <section className="about-intro">
        <div className="section-container">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, Wanderlust has been a pioneer in the travel industry, dedicated to providing
              unforgettable travel experiences to adventurers, explorers, and wanderers from around the world.
            </p>
            <p>
              What started as a small team of passionate travel enthusiasts has grown into a global travel
              agency with offices in 15 countries and partnerships with over 5,000 hotels and tour operators worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="section-container">
          <div className="mission-grid">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To inspire and enable travelers to explore the world responsibly, creating lasting memories and
                meaningful connections with people and cultures.
              </p>
            </div>

            <div className="mission-card">
              <h3>Our Vision</h3>
              <p>
                To be the world's most trusted travel agency, known for exceptional service, innovative solutions,
                and authentic travel experiences.
              </p>
            </div>

            <div className="mission-card">
              <h3>Our Values</h3>
              <p>
                Integrity, Innovation, Customer-Centricity, Sustainability, and Passion for Travel Excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">500K+</h3>
              <p className="stat-label">Happy Travelers</p>
            </div>

            <div className="stat-item">
              <h3 className="stat-number">100+</h3>
              <p className="stat-label">Destinations</p>
            </div>

            <div className="stat-item">
              <h3 className="stat-number">14+</h3>
              <p className="stat-label">Years Experience</p>
            </div>

            <div className="stat-item">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="section-container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">Expert travel consultants dedicated to your happiness</p>

          <div className="team-grid">
            {[
              { name: "Emma Rodriguez", role: "CEO & Founder", specialization: "Global Travel Strategy" },
              { name: "James Chen", role: "Head of Operations", specialization: "Asia-Pacific Specialist" },
              { name: "Sophia Martinez", role: "Customer Care Manager", specialization: "European Tours" },
              { name: "Alex Thompson", role: "Adventure Coordinator", specialization: "Adventure Travel" },
            ].map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">{member.name.charAt(0)}</div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="specialization">{member.specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="awards-section">
        <div className="section-container">
          <h2 className="section-title">Awards & Recognition</h2>
          <div className="awards-grid">
            <div className="award-item">🏆 Best Travel Agency 2024</div>
            <div className="award-item">⭐ TripAdvisor Excellence Award 2023</div>
            <div className="award-item">🌍 Sustainable Tourism Award 2023</div>
            <div className="award-item">👥 Customer Service Excellence 2023</div>
            <div className="award-item">✈️ Innovation in Travel Tech 2022</div>
            <div className="award-item">🎯 Top Rated Agency 2022</div>
          </div>
        </div>
      </section>
    </div>
  );
};

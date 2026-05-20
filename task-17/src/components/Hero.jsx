import React from "react";
import "../styles/Hero.css";

export const Hero = ({ title, subtitle, backgroundImage, ctaText, ctaLink }) => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=400"})`,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          {ctaText && ctaLink && (
            <a href={ctaLink} className="cta-button">
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

import React, { createContext, useState, useCallback } from "react";

export const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
  // State management
  const [bookings, setBookings] = useState([]);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      text: "Amazing experience! The team was professional and the trip was unforgettable.",
      destination: "Bali",
    },
    {
      id: 2,
      name: "Sarah Smith",
      rating: 5,
      text: "Best vacation ever. Highly recommend this travel agency!",
      destination: "Paris",
    },
    {
      id: 3,
      name: "Mike Johnson",
      rating: 4,
      text: "Great service and excellent planning. Will book again!",
      destination: "Tokyo",
    },
  ]);

  const [packages, setPackages] = useState([
    {
      id: 1,
      name: "Bali Paradise",
      destination: "Bali, Indonesia",
      price: 65999,
      duration: "7 days",
      image: "https://images.unsplash.com/photo-1537225228614-b19960110871?w=500&h=400",
      description: "Experience the beauty of Bali with stunning beaches and temples.",
      rating: 4.8,
      reviews: 245,
    },
    {
      id: 2,
      name: "European Adventure",
      destination: "Paris, France",
      price: 110899,
      duration: "10 days",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=400",
      description: "Explore the romance and culture of Paris and surrounding cities.",
      rating: 4.9,
      reviews: 312,
    },
    {
      id: 3,
      name: "Tokyo Explorer",
      destination: "Tokyo, Japan",
      price: 189999,
      duration: "8 days",
      image: "https://images.unsplash.com/photo-1540959375944-7049f642e9f1?w=500&h=400",
      description: "Discover the vibrant culture and technology of Tokyo.",
      rating: 4.7,
      reviews: 198,
    },
    {
      id: 4,
      name: "Swiss Alps",
      destination: "Switzerland",
      price: 109999,
      duration: "9 days",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400",
      description: "Mountain adventure in the picturesque Swiss Alps.",
      rating: 4.8,
      reviews: 287,
    },
    {
      id: 5,
      name: "Maldives Escape",
      destination: "Maldives",
      price: 32999,
      duration: "5 days",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&h=400",
      description: "Relax on pristine beaches and explore coral reefs.",
      rating: 5.0,
      reviews: 421,
    },
    {
      id: 6,
      name: "New York City",
      destination: "New York, USA",
      price: 189999,
      duration: "5 days",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&h=400",
      description: "Experience the excitement of the city that never sleeps.",
      rating: 4.6,
      reviews: 356,
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    message: "",
  });

  const [contactMessages, setContactMessages] = useState([]);

  // Action creators
  const addBooking = useCallback((booking) => {
    setBookings((prev) => [...prev, { ...booking, id: Date.now() }]);
  }, []);

  const removeBooking = useCallback((id) => {
    setBookings((prev) => prev.filter((booking) => booking.id !== id));
  }, []);

  const updateBooking = useCallback((id, updatedData) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, ...updatedData } : booking
      )
    );
  }, []);

  const addReview = useCallback((review) => {
    setReviews((prev) => [...prev, { ...review, id: Date.now() }]);
  }, []);

  const submitContactForm = useCallback((data) => {
    setContactMessages((prev) => [...prev, { ...data, id: Date.now(), createdAt: new Date() }]);
    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      travelDate: "",
      message: "",
    });
    return true;
  }, []);

  const updateFormData = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const value = {
    bookings,
    reviews,
    packages,
    formData,
    contactMessages,
    addBooking,
    removeBooking,
    updateBooking,
    addReview,
    submitContactForm,
    updateFormData,
  };

  return <TravelContext.Provider value={value}>{children}</TravelContext.Provider>;
};

export const useTravel = () => {
  const context = React.useContext(TravelContext);
  if (!context) {
    throw new Error("useTravel must be used within TravelProvider");
  }
  return context;
};

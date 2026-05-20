import React, { useState } from "react";
import "./App.css";

export default function MultiFieldForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: ""
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.phone.length !== 10) newErrors.phone = "Enter 10 digit phone";
    if (formData.password.length < 6)
      newErrors.password = "Minimum 6 characters required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form Submitted Successfully ");
      console.log(formData);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Registration Form</h2>

        <input name="name" placeholder="Name" onChange={handleChange} />
        <span>{errors.name}</span>

        <input name="email" placeholder="Email" onChange={handleChange} />
        <span>{errors.email}</span>

        <input name="phone" placeholder="Phone Number" onChange={handleChange} />
        <span>{errors.phone}</span>

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <span>{errors.password}</span>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <span>{errors.confirmPassword}</span>

        <input name="address" placeholder="Address" onChange={handleChange} />
        <input name="city" placeholder="City" onChange={handleChange} />
        <input name="state" placeholder="State" onChange={handleChange} />
        <input name="country" placeholder="Country" onChange={handleChange} />
        <input name="zip" placeholder="Zip Code" onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
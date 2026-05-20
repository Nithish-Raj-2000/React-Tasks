import React, { useState } from "react";
import "./App.css";

const FormValidation = () => {
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
    zip: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation Function
  const validate = () => {
    let newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Minimum 3 characters required";
    }

    // Email
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Address
    if (!formData.address) {
      newErrors.address = "Address is required";
    }

    // City
    if (!formData.city) {
      newErrors.city = "City is required";
    }

    // State
    if (!formData.state) {
      newErrors.state = "State is required";
    }

    // Country
    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    // Zip
    if (!formData.zip) {
      newErrors.zip = "Zip code is required";
    } else if (!/^\d{5,6}$/.test(formData.zip)) {
      newErrors.zip = "Invalid zip code";
    }

    return newErrors;
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <div className="container">
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((field) => (
          <div key={field} className="form-group">
            <label>{field}</label>
            <input
              type={field.toLowerCase().includes("password") ? "password" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
            />
            {errors[field] && <span className="error">{errors[field]}</span>}
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
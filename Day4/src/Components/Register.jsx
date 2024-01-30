// Register.jsx

import React, { useState } from 'react';
import './Register.css'; // Import your CSS file for styling
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
  });

  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error message when the user starts typing
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation for username
    if (!formData.username.trim()) {
      setErrors({
        ...errors,
        username: '*Username is required',
      });
    }

    // Simple validation for email
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrors({
        ...errors,
        email: '*Valid email is required',
      });
    }

    // Validation for password
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,}$/;
    if (!formData.password.match(passwordRegex)) {
      setErrors({
        ...errors,
        password: '*Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character',
      });
    }

    // Validation for confirm password
    if (formData.password !== formData.confirmPassword) {
      setErrors({
        ...errors,
        confirmPassword: '*Passwords do not match',
      });
    }

    // Validation for mobile
    const mobileRegex = /^[0-9]{10}$/; // Ensure the mobile field contains exactly 10 numbers
    if (!formData.mobile.match(mobileRegex)) {
      setErrors({
        ...errors,
        mobile: '*Mobile number should contain exactly 10 numbers',
      });
    }

    // Check if all fields are filled
    const allFieldsFilled = Object.values(formData).every((value) => value.trim() !== '');

    // If there are no errors and all fields are filled, perform registration logic
    if (allFieldsFilled && Object.values(errors).every((error) => !error)) {
      // Your registration logic here
      console.log('Form data submitted:', formData);
      // Navigate to Login page
      navigate('/Login');
    }
  };

  return (
    <>
      <div className='bimg'>
        <h1 className='register'>Registration Form</h1>
        <div className="registration-container">
          <div className="rleft-grid">
            <form onSubmit={handleSubmit}>
              <div className="rform-input">
                <label htmlFor="username" className="rform-label">Username:</label>
                <input
                  type="text"
                  id="rusername"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="rform-field"
                />
                <div className="rerror-message">{errors.username}</div>
              </div>
              <div className="rform-input">
                <label htmlFor="email" className="rform-label">Email:</label>
                <input
                  type="email"
                  id="remail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="rform-field"
                />
                <div className="rerror-message">{errors.email}</div>
              </div>
              <div className="rform-input">
                <label htmlFor="password" className="rform-label">Password:</label>
                <input
                  type="password"
                  id="rpassword"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="rform-field"
                />
                <div className="rerror-message">{errors.password}</div>
              </div>
              <div className="rform-input">
                <label htmlFor="confirmPassword" className="rform-label">Confirm Password:</label>
                <input
                  type="password"
                  id="rconfirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="rform-field"
                />
                <div className="rerror-message">{errors.confirmPassword}</div>
              </div>
              <div className="rform-input">
                <label htmlFor="mobile" className="rform-label">Mobile:</label>
                <input
                  type="text"
                  id="rmobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="rform-field"
                />
                <div className="rerror-message">{errors.mobile}</div>
              </div>
              <div className="rform-input">
        {Object.values(errors).every((error) => !error) && formData.password === formData.confirmPassword ? (
          <button type="submit" className="rregister-button">
            Register
          </button>
        ) : (
          <span>Register</span>
        )}
      </div>
            </form>
            <p className='rlogin-link'>Already have an account? <Link to="/Login">Login below</Link></p>
          </div>
          <div className="rright-grid">
            <img
              src="https://blog.commlabindia.com/hubfs/Imported_Blog_Media/elearning-process-storyboarding-Jul-04-2023-04-06-00-7853-AM.jpg"
              alt="Right Box Image"
              className="rright-box-image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

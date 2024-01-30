// Login.jsx

import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  // Declare allFieldsFilled at the beginning
  const allFieldsFilled = Object.values(formData).every((value) => value.trim() !== '');

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

    // Simple validation, you can add more complex validation as needed
    if (!formData.username.trim()) {
      setErrors({
        ...errors,
        username: '*Username is required',
      });
    }

    if (!formData.password.trim()) {
      setErrors({
        ...errors,
        password: '*Password is required',
      });
    }

    // Perform login logic if the form is valid
    if (allFieldsFilled && Object.values(errors).every((error) => !error)) {
      // Your login logic here
      console.log('Form is valid. Perform login logic.');
      // Navigate to HomePage
      // Note: You might want to use history.push or some other navigation method here
    }
  };

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="login-container">
          <h2 className="learnquir-heading">LearnQuir</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <label htmlFor="username" className="icon">
                <FaUser className="input-icon" />
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                className="input-field"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <div className="error-message">{errors.username}</div>}
            </div>
            <div className="gap"></div>
            <div className="form-input">
              <label htmlFor="password" className="icon">
                <FaLock className="input-icon" />
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="input-field"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <div className="error-message">{errors.password}</div>}
              <a href="#!" className="forgot-password">Forgot password?</a>
            </div>
            {/* Only navigate to HomePage if all fields are filled */}
            <button
              type="submit"
              className="login-button"
              disabled={!allFieldsFilled}
              onClick={() => allFieldsFilled && window.location.assign("/HomePage")}
            >
              Login
            </button>
          </form>
          <p className="signup-link">Don't you have an account? <Link to="/Register"><a href="#!">Sign up</a></Link></p>

          {/* Sign in with section */}
          <div className="signin-with">
            <p>or</p>
            <p className='signin'>Sign in with</p>
            {/* Add your Google, Facebook, Twitter logos here */}
            {/* For example: */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" alt="Google Logo" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook Logo" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="Twitter Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

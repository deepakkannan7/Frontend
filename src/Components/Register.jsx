// RegistrationForm.js

// import { useState } from 'react';
// // import { useHistory } from 'react-router-dom'; // Import useHistory
// import './Register.css'; // Import the CSS file

// const Register = () => {
// //   const history = useHistory(); // Initialize the useHistory hook

//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     mobileNumber: '',
//     role: 'student', // Default role
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: Handle form submission, validation, and API request here
//     console.log('Form submitted:', formData);

//     // Redirect to the homepage after successful registration
//     // history.push('/homepage');
//   };

//   return (
//     <div className="registration-form-container">
//       <form className="registration-form" onSubmit={handleSubmit}>
//         <h2 className="form-title">Register</h2>

//         <label htmlFor="email" className="form-label">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="form-input"
//           required
//         />

//         <label htmlFor="password" className="form-label">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           className="form-input"
//           required
//         />

//         <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           className="form-input"
//           required
//         />

//         <label htmlFor="mobileNumber" className="form-label">Mobile Number:</label>
//         <input
//           type="text"
//           id="mobileNumber"
//           name="mobileNumber"
//           value={formData.mobileNumber}
//           onChange={handleChange}
//           className="form-input"
//           required
//         />

//         <button type="submit" className="form-button">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

// Register.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
// import { useHistory } from 'react-router-dom'; // Import useHistory
import './Register.css'; // Import the CSS file

const Register = () => {
  // const history = useHistory(); // Initialize the useHistory hook

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    role: 'student', // Default role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission, validation, and API request here
    console.log('Form submitted:', formData);

    // Redirect to the homepage after successful registration
    // history.push('/homepage');
  };

  return (
    <div className="registration-form-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Register</h2>

        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required
        />

        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-input"
          required
        />

        <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="form-input"
          required
        />

        <label htmlFor="mobileNumber" className="form-label">Mobile Number:</label>
        <input
          type="text"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          className="form-input"
          required
        />

        <button type="submit" className="form-button">Register</button>

        {/* Link to navigate to the homepage */}
        <p>
          Already have an account? <Link to="/homepage">Go to Homepage</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;


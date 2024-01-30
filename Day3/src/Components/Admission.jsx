// Admission.jsx

import  { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import './Admission.css';

const Admission = () => {
  const [formData, setFormData] = useState({
    AdstudentId: '',
    AdcourseName: '',
    AdtotalAmount: '',
    AdmodeOfPayment: 'gpay',
    AdpaymentDate: '',
  });

  const [errors, setErrors] = useState({});
  const location = useLocation();

  useEffect(() => {
    // Extract course details from the location state
    const { state } = location;
    if (state) {
      setFormData({
        ...formData,
        AdcourseName: state.courseName || '',
        AdtotalAmount: state.totalAmount || '',
      });
    }
  }, [location, formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear validation error when the user starts typing
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If there are validation errors, stop the submission
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Handle form submission (you can send data to the server here)
    console.log('Form Submitted:', formData);
  };

  const validateForm = (data) => {
    const errors = {};

    // Basic validation example: checking if fields are not empty
    if (!data.AdstudentId.trim()) {
      errors.AdstudentId = '*Student ID is required';
    }

    if (!data.AdcourseName.trim()) {
      errors.AdcourseName = '*Course Name is required';
    }

    if (!data.AdtotalAmount.trim()) {
      errors.AdtotalAmount = '*Total Amount is required';
    }

    if (!data.AdpaymentDate.trim()) {
      errors.AdpaymentDate = '*Payment Date is required';
    }

    return errors;
  };

  return (
    <>
      <div>
        <nav className="Adnavbar">
          <div className="Adbrand">
            <FontAwesomeIcon icon={faBook} className="Adlearning-icon" />
            LearnHub
          </div>
          <ul className="Adnav-list">
            <li className="Adnav-item">
              <a href="#" className="Adnav-link">
                Courses
              </a>
            </li>
            <li className="Adnav-item">
              <a href="#" className="Adnav-link">
                Enquiry
              </a>
            </li>
            <li className="Adnav-item"> 
              <a href="#" className="Adnav-link">
                Dashboard
              </a>
            </li>
            <li className="Adnav-item">
              <a href="#" className="Adnav-link">
                Payment
              </a>
            </li>
            <li className="Adnav-item">
              <a href="#" className="Adnav-link">
                AboutUs
              </a>
            </li>
            <li className="Adnav-item">
              <a href="#" className="Adnav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <div className='admiss'>
          <h1 className="Admission-heading">Admission Form</h1>
          <form className="Adadmission-form" onSubmit={handleSubmit}>
            <label htmlFor="AdstudentId" className="Adform-label">
              Student ID:
            </label>
            <input
              type="text"
              id="AdstudentId"
              name="AdstudentId"
              value={formData.AdstudentId}
              onChange={handleChange}
              className={`Adform-input ${errors.AdstudentId ? 'error' : ''}`}
            />
            {errors.AdstudentId && <p className="Aderror-message">{errors.AdstudentId}</p>}

            <label htmlFor="AdcourseName" className="Adform-label">
              Course Name:
            </label>
            <input
              type="text"
              id="AdcourseName"
              name="AdcourseName"
              value={formData.AdcourseName}
              onChange={handleChange}
              className={`Adform-input ${errors.AdcourseName ? 'error' : ''}`}
            />
            {errors.AdcourseName && <p className="Aderror-message">{errors.AdcourseName}</p>}

            <label htmlFor="AdtotalAmount" className="Adform-label">
              Total Amount:
            </label>
            <input
              type="number"
              id="AdtotalAmount"
              name="AdtotalAmount"
              value={formData.AdtotalAmount}
              onChange={handleChange}
              className={`Adform-input ${errors.AdtotalAmount ? 'error' : ''}`}
            />
            {errors.AdtotalAmount && <p className="Aderror-message">{errors.AdtotalAmount}</p>}

            <label htmlFor="AdmodeOfPayment" className="Adform-label">
              Mode of Payment:
            </label>
            <select
              id="AdmodeOfPayment"
              name="AdmodeOfPayment"
              value={formData.AdmodeOfPayment}
              onChange={handleChange}
              className="Adform-input"
            >
              <option value="gpay">G-pay</option>
              <option value="creditCard">Credit Card</option>
              <option value="debitCard">Debit Card</option>
            </select>

            <label htmlFor="AdpaymentDate" className="Adform-label">
              Payment Date:
            </label>
            <input
              type="date"
              id="AdpaymentDate"
              name="AdpaymentDate"
              value={formData.AdpaymentDate}
              onChange={handleChange}
              className={`Adform-input ${errors.AdpaymentDate ? 'error' : ''}`}
            />
            {errors.AdpaymentDate && <p className="Aderror-message">{errors.AdpaymentDate}</p>}

            <button type="submit" className="Adsubmit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

Admission.propTypes = {};

export default Admission;

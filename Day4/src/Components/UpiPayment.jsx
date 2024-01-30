// UpiPaymentPage.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faGlobe, faLanguage, faCheck, faStar, faClock, faLaptop, faBook, faMobileAlt, faAward } from '@fortawesome/free-solid-svg-icons';
import './UpiPayment.css';

const UpiPaymentPage = () => {
  const [upiId, setUpiId] = useState('example@upi'); // Default UPI ID
  const [amount, setAmount] = useState('50'); // Default amount
  const [transactionStatus, setTransactionStatus] = useState('');

  const handlePayment = () => {
    // Simulate UPI payment logic (Replace with actual implementation)
    if (upiId && amount) {
      // Perform the UPI payment processing here
      // Simulate success for demonstration purposes
      setTransactionStatus(`Payment of ${amount} to ${upiId} successful`);
    } else {
      setTransactionStatus('Please provide UPI ID and amount');
    }
  };

  return (
    <div>
    <nav className='Unavbar'>
    <div className="Ubrand">
      <FontAwesomeIcon icon={faBook} className="Ulearning-icon" />
      LearnHub
    </div>
    <ul className="Unav-list">
      <li className="Unav-item">
        <a href="#" className="Unav-link">
          Courses
        </a>
      </li>
      <li className="Unav-item">
        <a href="#" className="Unav-link">
          Enquiry
        </a>
      </li>
      <li className="Unav-item">
        <a href="#" className="Unav-link">
          Dashboard
        </a>
      </li>
      <li className="Unav-item">
        <a href="#" className="Unav-link">
          Payment
        </a>
      </li>
      <li className="Unav-item">
        <a href="#" className="Unav-link">
          AboutUs
        </a>
      </li>
      <li className="Unav-item">
        <a href="#" className="Unav-link">
          Contact
        </a>
      </li>
    </ul>
  </nav>
    <div className="upi-payment-container">
      <h2 className="upi-heading">UPI Payment Page</h2>
      <div className="upi-grid-box">
        <div className="upi-grid">
          <div className="upi-payment-form">
            <label htmlFor="upiId" className="upi-label">UPI ID:</label>
            <input
              type="text"
              id="upiId"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="upi-input"
            />

            <label htmlFor="amount" className="upi-label">Amount:</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="upi-input"
            />

            <button onClick={handlePayment} className="upi-button">Make Payment</button>
          </div>

          {transactionStatus && (
            <div className="transaction-status">
              <h3 className="transaction-heading">Transaction Status:</h3>
              <p className="transaction-message">{transactionStatus}</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default UpiPaymentPage;

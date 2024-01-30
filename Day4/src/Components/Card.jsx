// CardTransactionPage.js

import React, { useState } from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faGlobe, faLanguage, faCheck, faStar, faClock, faLaptop, faBook, faMobileAlt, faAward } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');

  const handlePayment = () => {
    // Simulate card payment logic (Replace with actual implementation)
    if (cardNumber && expiryDate && cvv && amount) {
      // Perform the card payment processing here
      // Simulate success for demonstration purposes
      setTransactionStatus(`Payment of ${amount} using card ending with ${cardNumber.slice(-4)} successful`);
    } else {
      setTransactionStatus('Please fill in all the card details and amount');
    }
  };

  return (
    <div>
    <nav className='Canavbar'>
    <div className="Cabrand">
      <FontAwesomeIcon icon={faBook} className="Calearning-icon" />
      LearnHub
    </div>
    <ul className="Canav-list">
      <li className="Canav-item">
        <a href="#" className="Canav-link">
          Courses
        </a>
      </li>
      <li className="Canav-item">
        <a href="#" className="Canav-link">
          Enquiry
        </a>
      </li>
      <li className="Canav-item">
        <a href="#" className="Canav-link">
          Dashboard
        </a>
      </li>
      <li className="Canav-item">
        <a href="#" className="Canav-link">
          Payment
        </a>
      </li>
      <li className="Canav-item">
        <a href="#" className="Canav-link">
          AboutUs
        </a>
      </li>
      <li className="Canav-item">
        <a href="#" className="Canav-link">
          Contact
        </a>
      </li>
    </ul>
  </nav>

    <div className="card-transaction-container">
      <div className="card-box">
        <h2 className="card-transaction-heading">Card Transaction Page</h2>
        <div className="card-form">
          <label htmlFor="cardNumber" className="card-label">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="card-input"
          />

      
<label htmlFor="expiryDate" className="card-label">Expiry Date:</label>
          <input
            type="date"  // Change input type to date
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="card-input"
          />

          <label htmlFor="cvv" className="card-label">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            className="card-input"
          />

          <label htmlFor="amount" className="card-label">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="card-input"
          />

          <button onClick={handlePayment} className="card-button">Make Payment</button>
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
  );
};

export default Card;

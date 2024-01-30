// PaymentHistory.js
// import React from 'react';
import './PaymentHistory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faGlobe, faLanguage, faCheck, faStar, faClock, faLaptop, faBook, faMobileAlt, faAward } from '@fortawesome/free-solid-svg-icons';

const PaymentHistory = () => {
  const paymentHistoryData = [

        { 
          courseName: 'Web Design', 
          amountPaid: '$100', 
          paymentDate: '2022-02-15', 
          status: 'Success', 
          transactionId: 'ABC123', 
          paymentMethod: 'Credit Card'
        },
        { 
          courseName: 'React Development', 
          amountPaid: '$150', 
          paymentDate: '2022-03-20', 
          status: 'Success', 
          transactionId: 'XYZ456', 
          paymentMethod: 'PayPal'
        },
        { 
          courseName: 'Node.js Basics', 
          amountPaid: '$80', 
          paymentDate: '2022-04-10', 
          status: 'Success', 
          transactionId: 'DEF789', 
          paymentMethod: 'Stripe'
        },
        { 
          courseName: 'Python for Beginners', 
          amountPaid: '$120', 
          paymentDate: '2022-05-05', 
          status: 'Failed', 
          transactionId: 'GHI987', 
          paymentMethod: 'Credit Card'
        },
        { 
          courseName: 'JavaScript Advanced', 
          amountPaid: '$200', 
          paymentDate: '2022-06-15', 
          status: 'Success', 
          transactionId: 'JKL321', 
          paymentMethod: 'PayPal'
        },
        { 
          courseName: 'Angular Framework', 
          amountPaid: '$180', 
          paymentDate: '2022-07-20', 
          status: 'Success', 
          transactionId: 'MNO654', 
          paymentMethod: 'Stripe'
        },
        { 
          courseName: 'Java Programming', 
          amountPaid: '$160', 
          paymentDate: '2022-08-05', 
          status: 'Failed', 
          transactionId: 'PQR789', 
          paymentMethod: 'Credit Card'
        },
        { 
          courseName: 'Mobile App Development', 
          amountPaid: '$250', 
          paymentDate: '2022-09-18', 
          status: 'Success', 
          transactionId: 'STU987', 
          paymentMethod: 'PayPal'
        },
        { 
          courseName: 'Database Management', 
          amountPaid: '$150', 
          paymentDate: '2022-10-10', 
          status: 'Success', 
          transactionId: 'VWX321', 
          paymentMethod: 'Stripe'
        },
        { 
          courseName: 'Data Science Fundamentals', 
          amountPaid: '$180', 
          paymentDate: '2022-11-25', 
          status: 'Failed', 
          transactionId: 'YZA456', 
          paymentMethod: 'Credit Card'
        },
        { 
          courseName: 'Machine Learning Basics', 
          amountPaid: '$220', 
          paymentDate: '2022-12-15', 
          status: 'Success', 
          transactionId: 'BCD654', 
          paymentMethod: 'PayPal'
        },
        // Add more payment history data as needed
     
  ];

  return (
    <div>
    <nav className='Pnavbar'>
    <div className="Pbrand">
      <FontAwesomeIcon icon={faBook} className="Plearning-icon" />
      LearnHub
    </div>
    <ul className="Pnav-list">
      <li className="Pnav-item">
        <a href="#" className="Pnav-link">
          Courses
        </a>
      </li>
      <li className="Pnav-item">
        <a href="#" className="Pnav-link">
          Enquiry
        </a>
      </li>
      <li className="Pnav-item">
        <a href="#" className="Pnav-link">
          Dashboard
        </a>
      </li>
      <li className="Pnav-item">
        <a href="#" className="Pnav-link">
          Payment
        </a>
      </li>
      <li className="Pnav-item">
        <a href="#" className="Pnav-link">
          AboutUs
        </a>
      </li>
      <li className="Pnav-item">
        <a href="#" className="Pnav-link">
          Contact
        </a>
      </li>
    </ul>
  </nav>

  <div className="payment-history-container">
        <h2 className="payment-history-heading">Payment History</h2>
        <table className="payment-history-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Amount Paid</th>
              <th>Payment Date</th>
              <th>Status</th>
              <th>Transaction ID</th>
              <th>Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistoryData.map((payment, index) => (
              <tr key={index}>
                <td>{payment.courseName}</td>
                <td className={`status-${payment.status.toLowerCase()} payment-method-${payment.paymentMethod.toLowerCase()}`}>
                  {payment.amountPaid}
                </td>
                <td>{payment.paymentDate}</td>
                <td className={`status-${payment.status.toLowerCase()} payment-method-${payment.paymentMethod.toLowerCase()}`}>
                  {payment.status}
                </td>
                <td>{payment.transactionId}</td>
                <td>{payment.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;

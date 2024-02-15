// Admadminssion.jsx

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Admadmission.css';

const Admadminssion = () => {
  const [admissions, setAdmissions] = useState([
    {
      id: 1,
      studentId: 'STU001',
      courseName: 'Web Development',
      totalAmount: '$500',
      modeOfPayment: 'Credit Card',
      paymentDate: '2024-03-15',
      admissionDate: '2024-03-10',
      status: 'Accepted',
    },
    // Add more admission details as needed
  ]);

  const handleDelete = (id) => {
    // Remove the admission with the specified id
    setAdmissions((prevAdmissions) => prevAdmissions.filter((admission) => admission.id !== id));
  };

  return (
    <div>
        
        <div>
      <nav className="Adadmnavbar">
        <div className="Adadmbrand">
          {/* <FontAwesomeIcon icon={faBook} className="Adhlearning-icon" /> */}
          LearnQuir
        </div>
        <ul className="Adadmnav-list">
          <li className="Adadmnav-item">
            <a to="#" className="Adadmnav-link">
              Courses
            </a>
          </li>
          <li className="Adadmnav-item">
            <a to="#" className="Adadmnav-link">
              Enquiry
            </a>
          </li>
          {/* <li className="Adadmnav-item">
            <a to="#" className="Adadmnav-link">
              Dashboard
            </a>
          </li> */}
          <li className="Adadmnnav-item">
            <a to="#" className="Adadmnav-link">
              Payment
            </a>
          </li>
        </ul>
      </nav>

    <div className="admadmission-container">
      <h1 className="admadission-heading">Admission Details</h1>
      <table className="admadission-table">
        <thead>
          <tr>
            <th className="admadstudent-id">Student ID</th>
            <th className="admadcourse-name">Course Name</th>
            <th className="admadtotal-amount">Total Amount</th>
            <th className="admadmode-of-payment">Mode of Payment</th>
            <th className="admadpayment-date">Payment Date</th>
            <th className="admadadmission-date">Admission Date</th>
            {/* <th className="status">Status</th> */}
            <th className="action">Action</th>
          </tr>
        </thead>
        <tbody>
          {admissions.map((admission) => (
            <tr key={admission.id}>
              <td className="admadstudent-id">{admission.studentId}</td>
              <td className="admadcourse-name">{admission.courseName}</td>
              <td className="admadtotal-amount">{admission.totalAmount}</td>
              <td className="admadmode-of-payment">{admission.modeOfPayment}</td>
              <td className="admadpayment-date">{admission.paymentDate}</td>
              <td className="admadadmission-date">{admission.admissionDate}</td>
              {/* <td className="status">{admission.status}</td> */}
              <td className="admadaction">
                <FontAwesomeIcon
                  icon={faTrash}
                  className="admaddelete-icon"
                  onClick={() => handleDelete(admission.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default Admadminssion;

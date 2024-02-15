import React, { useState } from 'react';
import './AdminPayment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const AdminPayment = () => {
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
        { 
          courseName: 'Web Development Masterclass', 
          amountPaid: '$300', 
          paymentDate: '2023-01-10', 
          status: 'Inprogress', 
          transactionId: 'EFG123', 
          paymentMethod: 'Stripe'
        },
        { 
          courseName: 'Artificial Intelligence Basics', 
          amountPaid: '$180', 
          paymentDate: '2023-02-18', 
          status: 'Inprogress', 
          transactionId: 'HIJ456', 
          paymentMethod: 'Credit Card'
        },
        { 
          courseName: 'Cybersecurity Fundamentals', 
          amountPaid: '$200', 
          paymentDate: '2023-03-25', 
          status: 'Inprogress', 
          transactionId: 'KLM789', 
          paymentMethod: 'PayPal'
        },
        { 
          courseName: 'Digital Marketing Essentials', 
          amountPaid: '$120', 
          paymentDate: '2023-04-05', 
          status: 'Inprogress', 
          transactionId: 'NOP987', 
          paymentMethod: 'Stripe'
        },
        { 
          courseName: 'iOS App Development', 
          amountPaid: '$250', 
          paymentDate: '2023-05-15', 
          status: 'Inprogress', 
          transactionId: 'QRS321', 
          paymentMethod: 'Credit Card'
        },
        { 
          courseName: 'Game Development with Unity', 
          amountPaid: '$180', 
          paymentDate: '2023-06-20', 
          status: 'Inprogress', 
          transactionId: 'TUV654', 
          paymentMethod: 'PayPal'
        },
        { 
          courseName: 'DevOps Essentials', 
          amountPaid: '$160', 
          paymentDate: '2023-07-05', 
          status: 'Inprogress', 
          transactionId: 'WXY789', 
          paymentMethod: 'Stripe'
        },
        { 
          courseName: 'Blockchain Basics', 
          amountPaid: '$220', 
          paymentDate: '2023-08-18', 
          status: 'Inprogress', 
          transactionId: 'ZAB123', 
          paymentMethod: 'Credit Card'
        },
        { 
          courseName: 'Big Data Analytics', 
          amountPaid: '$180', 
          paymentDate: '2023-09-10', 
          status: 'Inprogress', 
          transactionId: 'CDE456', 
          paymentMethod: 'PayPal'
        },
        { 
          courseName: 'UI/UX Design Masterclass', 
          amountPaid: '$200', 
          paymentDate: '2023-10-05', 
          status: 'Inprogress', 
          transactionId: 'FGH987', 
          paymentMethod: 'Stripe'
        },
      ];
  const [responseStatus, setResponseStatus] = useState({});

  const handleResponseChange = (index, response) => {
    setResponseStatus((prevStatus) => ({ ...prevStatus, [index]: response }));
  };

  const handleStatusUpdate = (index) => {
    const selectedResponse = responseStatus[index] || 'Inprogress';
    // Update the status in your data or send it to the server
    // For demonstration, let's log the status to the console
    console.log(`Updated status for index ${index}: ${selectedResponse}`);
  };

  return (
    <div>

      <div>
      <nav className="Adpnavbar">
        <div className="Adpbrand">
          {/* <FontAwesomeIcon icon={faBook} className="Adhlearning-icon" /> */}
          LearnQuir
        </div>
        <ul className="Adpnav-list">
          <li className="Adpnav-item">
            <a to="#" className="Adpnav-link">
              Courses
            </a>
          </li>
          <li className="Adpnav-item">
            <a to="#" className="Adpnav-link">
              Enquiry
            </a>
          </li>
          {/* <li className="Adpnav-item">
            <a to="#" className="Adpnav-link">
              Dashboard
            </a>
          </li> */}
          <li className="Adpnnav-item">
            <a to="#" className="Adpnav-link">
              Payment
            </a>
          </li>
        </ul>
      </nav>
     

      <div className="adppayment-history-container">
        <h2 className="adppayment-history-heading">Payment History</h2>
        <table className="adppayment-history-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Amount Paid</th>
              <th>Payment Date</th>
              <th>Response</th>
              <th>Status</th>
              <th>Transaction ID</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistoryData.map((payment, index) => (
              <tr key={index}>
                <td>{payment.courseName}</td>
                <td>{payment.amountPaid}</td>
                <td>{payment.paymentDate}</td>
                <td>
                  <select
                    value={responseStatus[index] || 'Inprogress'}
                    onChange={(e) => handleResponseChange(index, e.target.value)}
                  >
                    <option value="Inprogress">Inprogress</option>
                    <option value="Success">Success</option>
                    <option value="Failure">Failure</option>
                  </select>
                </td>
                <td>{responseStatus[index]}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.paymentMethod}</td>
                <td>
                  <button onClick={() => handleStatusUpdate(index)}>Update Status</button>
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

export default AdminPayment;

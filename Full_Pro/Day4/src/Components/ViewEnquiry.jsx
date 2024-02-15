// import { Link, useParams } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBook } from '@fortawesome/free-solid-svg-icons';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import './ViewEnquiry.css';

// const ViewEnquiry = () => {

//   const {email, courseName, enquiryDate, enquiryText} = useParams();

//   return (
//     <>
//     <nav className="Enavbar">
//     <div className="Ebrand">
//       <FontAwesomeIcon icon={faBook} className="Elearning-icon" />
//       LearnQuir
//     </div>
//     <ul className="Enav-list">
//       <li className="Enav-item">
//         <a href="#" className="Enav-link">
//           Courses
//         </a>
//       </li>
//       <li className="Enav-item">
//         <a href="#" className="Enav-link">
//           Enquiry
//         </a>
//       </li>
//       <li className="Enav-item">
//         <a href="#" className="Enav-link">
//           Dashboard
//         </a>
//       </li>
//       <li className="Enav-item">
//         <a href="#" className="Enav-link">
//           Payment
//         </a>
//       </li>
//       <li className="Enav-item">
//         <a href="#" className="Enav-link">
//           AboutUs
//         </a>
//       </li>
//       <li className="Enav-item">
//         <a href="#" className="Enav-link">
//           Contact
//         </a>
//       </li>
//     </ul>
//   </nav>
//     <div className="enquiry-container">
//       <h2 className="enquiry-heading">Enquiry Details</h2>
//       <table className="enquiry-table">
//         <thead>
//           <tr>
//             <th className="table-header">Email</th>
//             <th className="table-header">Course Name</th>
//             <th className="table-header">Enquiry Text</th>
//             <th className="table-header">Enquiry Date</th>
//             <th className="table-header">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="table-data">{email}</td>
//             <td className="table-data">{courseName}</td>
//             <td className="table-data">{enquiryText}</td>
//             <td className="table-data">{enquiryDate}</td>
//             <td className="table-data">
//               <FontAwesomeIcon icon={faTrash} className="delete-icon" />
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//     </>
//   );
// };

// export default ViewEnquiry;


// ViewEnquiryPage.js
// ViewEnquiryPage.js

import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ViewEnquiry.css'; // Import the CSS file

const ViewEnquiryPage = () => {
  const [enquiries, setEnquiries] = useState([
    {
      id: 1,
      emailId: 'example1@example.com',
      courseName: 'React 101',
      description: 'I have a question about React basics.',
      enquiryDate: '2024-01-30',
    },
    {
      id: 2,
      emailId: 'example2@example.com',
      courseName: 'Node.js Fundamentals',
      description: 'Interested in learning Node.js. What are the prerequisites?',
      enquiryDate: '2024-01-30',
    },
    {
      id: 3,
      emailId: 'example3@example.com',
      courseName: 'Python for Beginners',
      description: 'Looking to start with Python. Any recommended resources?',
      enquiryDate: '2024-01-31',
    },
    {
      id: 4,
      emailId: 'example4@example.com',
      courseName: 'Web Development Bootcamp',
      description: 'Considering a web development bootcamp. What technologies are covered?',
      enquiryDate: '2024-01-31',
    },
    {
      id: 5,
      emailId: 'example5@example.com',
      courseName: 'JavaScript Advanced Concepts',
      description: 'Exploring advanced JavaScript concepts. Any recommended courses?',
      enquiryDate: '2024-02-01',
    },
    {
      id: 6,
      emailId: 'example6@example.com',
      courseName: 'Data Science Essentials',
      description: 'Interested in data science. What are the essential topics to cover?',
      enquiryDate: '2024-02-01',
    },
    {
      id: 7,
      emailId: 'example7@example.com',
      courseName: 'UI/UX Design Basics',
      description: 'Considering a career in UI/UX design. Where should I start?',
      enquiryDate: '2024-02-02',
    },


    // Add more default enquiries as needed
  ]);

  const handleDelete = (id) => {
    const updatedEnquiries = enquiries.filter((enquiry) => enquiry.id !== id);
    setEnquiries(updatedEnquiries);
  };

  return (
    <div>
    <nav className='VEnavbar'>
    <div className="VEbrand">
      {/* <FontAwesomeIcon icon={faBook} className="Ulearning-icon" /> */}
      LearnQuir
    </div>
    <ul className="VEnav-list">
      <li className="VEnav-item">
        <a href="#" className="VEnav-link">
          <Link to='/Courses'>
          Courses
          </Link>
        </a>
      </li>
      <li className="VEnav-item">
        <a href="#" className="VEnav-link">
        <Link to='/ViewEnquiry'>
          Enquiry
          </Link>
        </a>
      </li>
      {/* <li className="VEnav-item">
        <a href="#" className="VEnav-link">
        <Link to='/Courses'>
          Dashboard
          </Link>
        </a>
      </li> */}
      <li className="VEnav-item">
        <a href="#" className="VEnav-link">
        <Link to='/PaymentHistory'>
          Payment
          </Link>
        </a>
      </li>
      <li className="VEnav-item">
        <a href="#" className="VEnav-link">
        <Link to='/AboutUsPage'>
          AboutUs
          </Link>
        </a>
      </li>
      <li className="VEnav-item">
        <a href="#" className="VEnav-link">
        <Link to='/Contact'>
          Contact
          </Link>
        </a>
      </li>
    </ul>
  </nav>
    <div className="enquiries-container">
      <h1 className="enquiries-heading">Enquiries</h1>
      <table className="enquiries-table">
        <thead>
          <tr>
            <th className="enquiries-header">Email Id</th>
            <th className="enquiries-header">Course Name</th>
            <th className="enquiries-header">Description</th>
            <th className="enquiries-header">Enquiry Date</th>
            <th className="enquiries-header">Action</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry) => (
            <tr key={enquiry.id} className="enquiries-row">
              <td className="enquiries-data">{enquiry.emailId || 'N/A'}</td>
              <td className="enquiries-data">{enquiry.courseName || 'N/A'}</td>
              <td className="enquiries-data">{enquiry.description || 'N/A'}</td>
              <td className="enquiries-data">{enquiry.enquiryDate || 'N/A'}</td>
              <td className="enquiries-data">
                <button className="delete-button" onClick={() => handleDelete(enquiry.id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ViewEnquiryPage;

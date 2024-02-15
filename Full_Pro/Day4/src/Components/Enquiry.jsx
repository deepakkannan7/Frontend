// Enquiry.jsx

import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Enquiry.css';

const Enquiry = () => {
  const { courseName } = useParams(); 

  const [email, setEmail] = useState('');
  const [enquiryText, setEnquiryText] = useState('');
  const [enquiryDate, setEnquiryDate] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Construct the link manually with query parameters
  //   const link = `/ViewEnquiry/${email}/${courseName}/${enquiryText}/${enquiryDate}`;
  //   window.location.href = link; // Redirect to the ViewEnquiry page
  // };

  return (
    <>
      <div>
        <nav className="Enavbar">
          <div className="Ebrand">
            <FontAwesomeIcon icon={faBook} className="Elearning-icon" />
            LearnQuir
          </div>
          <ul className="Enav-list">
            <li className="Enav-item">
              <Link to="#" className="Enav-link">
                Courses
              </Link>
            </li>
            <li className="Enav-item">
              <Link to="#" className="Enav-link">
                Enquiry
              </Link>
            </li>
            {/* <li className="Enav-item">
              <Link to="#" className="Enav-link">
                Dashboard
              </Link>
            </li> */}
            <li className="Enav-item">
              <Link to="#" className="Enav-link">
                Payment
              </Link>
            </li>
            <li className="Enav-item">
              <Link to="#" className="Enav-link">
                AboutUs
              </Link>
            </li>
            <li className="Enav-item">
              <Link to="#" className="Enav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="Enquiry-container">
        <div className="Egrid-box">
          <h2 className="Enquiry-heading">Course Enquiry</h2>
          {/* <form className="Enquiry-form" onSubmit={handleSubmit}> */}
          <form className="Enquiry-form">
            <label htmlFor="email">Email Id:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="courseName">Course Name:</label>
            <input
              type="text"
              id="courseName"
              value={courseName}
              required
            />

            <label htmlFor="enquiryText">Enquiry:</label>
            <textarea
              id="enquiryText"
              value={enquiryText}
              onChange={(e) => setEnquiryText(e.target.value)}
              required
            ></textarea>

            <label htmlFor="enquiryDate">Enquiry Date:</label>
            <input
              type="date"
              id="enquiryDate"
              value={enquiryDate}
              onChange={(e) => setEnquiryDate(e.target.value)}
              required
            />

            <button type="submit">Submit Enquiry</button>
          </form>
        </div>
        

        <div className="Second-grid">
          <h2 className="Place-enquiry-text" id="enquiryText">
            PLACE YOUR ENQUIRY!!!
          </h2>
           <img
            src="https://www.nicepng.com/png/detail/14-143469_icon-photos-question-problem-statement-icon-png.png"
            alt="Enquiry Image"
            className="Place-enquiry-image"
          />
        </div>
      </div> 
    </>
  );
};

Enquiry.propTypes = {
  gridsData: PropTypes.array.isRequired,
};

export default Enquiry;

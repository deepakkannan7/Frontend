// ContactUsPage.js
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const ContactUsPage = () => {
    const [expandedQuestion, setExpandedQuestion] = useState(null);
    const handleQuestionClick = (index) => {
        setExpandedQuestion((prev) => (prev === index ? null : index));
      };
    

    const faqData = [
      {
        question: 'How can I enroll in a course?',
        answer: 'Visit our Courses page, select the desired course, and follow the enrollment process.',
      },
      {
        question: 'What types of payment do you accept?',
        answer: 'We accept credit/debit cards, PayPal, and other common payment methods. Choose your preferred option during the checkout process.',
      },
      {
        question: 'Is financial aid available for courses?',
        answer: 'Yes, we offer financial aid for eligible students. Please check our Financial Aid page for more information on how to apply.',
      },
      {
        question: 'How do I reset my password?',
        answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page. Follow the instructions sent to your registered email address.',
      },
    ];
  
  return (
    <div>
    <nav className='Connavbar'>
    <div className="Conbrand">
      {/* <FontAwesomeIcon icon={faBook} className="Ulearning-icon" /> */}
      LearnHub
    </div>
    <ul className="Connav-list">
      <li className="Connav-item">
        <a href="#" className="Connav-link">
          Courses
        </a>
      </li>
      <li className="Connav-item">
        <a href="#" className="Connav-link">
          Enquiry
        </a>
      </li>
      <li className="Connav-item">
        <a href="#" className="Connav-link">
          Dashboard
        </a>
      </li>
      <li className="Connav-item">
        <a href="#" className="Connav-link">
          Payment
        </a>
      </li>
      <li className="Connav-item">
        <a href="#" className="Connav-link">
          AboutUs
        </a>
      </li>
      <li className="Connav-item">
        <a href="#" className="Connav-link">
          Contact
        </a>
      </li>
    </ul>
  </nav>

    <div className="contact-us-container">
      <div className="contact-header">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-subheading">We'd love to hear from you!</p>
      </div>

      <div className="contact-section">
        <div className="contact-form">
          <h2 className="contact-form-heading">Send us a Message</h2>
          <form>
            <label className="contact-label" htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />

            <label className="contact-label" htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />

            <label className="contact-label" htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h2 className="contact-info-heading">Contact Information</h2>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <p className="contact-detail">info@educationportal.com</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <p className="contact-detail">+1 (123) 456-7890</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <p className="contact-detail">123 Education Street, Cityville, Country</p>
          </div>
        </div>
      </div>

      <div className="map-section">
        <h2 className="map-heading">Our Location</h2>
        <div className="map-description">Visit us at the following address:</div>
        {/* Add your map component here */}
      </div>

      <div className="additional-info-section">
        <h2 className="additional-info-heading">Additional Information</h2>
        <p className="additional-info-description">
          Explore our website to discover more about our courses and programs. If you have any questions or need assistance,
          feel free to reach out to us. We are here to help you on your learning journey.
        </p>
      </div>

      <div className="success-stories-section">
        <h2 className="success-stories-heading">Success Stories</h2>
        <div className="success-story">
          <FontAwesomeIcon icon={faCheck} className="success-icon" />
          <p className="success-text">
            "I enrolled in a course and it completely transformed my skills. The instructors are top-notch, and the learning
            experience is exceptional!"
          </p>
        </div>
        {/* Add more success stories as needed */}
      </div>

      <div className="social-media-section">
        <h2 className="social-media-heading">Connect with Us on Social Media</h2>
        <div className="social-media-links">
          {/* Add your social media links here */}
          <a href="#" className="social-media-link"><FaFacebook /></a>
          <a href="#" className="social-media-link"><FaTwitter /></a>
          <a href="#" className="social-media-link"><FaInstagram /></a>
          {/* Add more social media links as needed */}
        </div>
      </div>

      <div className="faq-section">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className={`faq-question ${expandedQuestion === index ? 'expanded' : ''}`}
              onClick={() => handleQuestionClick(index)}
            >
              {faq.question}
            </div>
            {expandedQuestion === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ContactUsPage;

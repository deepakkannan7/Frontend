import React from 'react';
import './Contact.css'; // Don't forget to import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faSync, faGlobe, faLanguage, faCheck, faStar, faClock, faLaptop, faBook, faMobileAlt, faAward } from '@fortawesome/free-solid-svg-icons';

const ContactUsPage = () => {
  return (
    <div className='Cbody'>
      <nav className='Connavbar'>
        <div className="Dbrand">
          <FontAwesomeIcon icon={faBook} className="Conlearning-icon" />
          LearnQuir
        </div>
        <ul className="Connav-list">
          <li className="Connav-item">
            <a href="#" className="Connav-link">
              <Link to='/Courses'>
              Courses
              </Link>
            </a>
          </li>
          <li className="Connav-item">
            <a href="#" className="Connav-link">
            <Link to='/ViewEnquiry'> 
              Enquiry
              </Link>
            </a>
          </li>
          {/* <li className="Connav-item">
            <a href="#" className="Connav-link">
            <Link to='/Courses'>
              Dashboard
              </Link>
            </a>
          </li> */}
          <li className="Connav-item">
            <a href="#" className="Connav-link">
            <Link to='/PaymentHistory'>
              Payment
              </Link>
            </a>
          </li>
          <li className="Connav-item">
            <a href="#" className="Connav-link">
            <Link to='/AboutUsPage'>
              AboutUs
              </Link>
            </a>
          </li>
          <li className="Connav-item">
            <a href="#" className="Connav-link">
            <Link to='/Contact'>
              Contact
              </Link>
            </a>
          </li>
        </ul>
      </nav>

    <section>
      <div className="section-header">
        <div className="Lcontainer">
          <h2 className='Chead'>Contact US</h2>
          <p>
          We are committed to providing you with the best online learning experience. If you have any questions, concerns, or feedback, our dedicated support team is here to assist you
          </p>
        </div>
      </div>

      <div className="Lcontainer">
        <div className="row">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-home"></i>
              </div>

              <div className="contact-info-content">
                <h4>Address</h4>
                <p>
                  4671 Sugar Camp Road,<br /> Owatonna, Minnesota, <br />55060
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-phone"></i>
              </div>

              <div className="contact-info-content">
                <h4>Phone</h4>
                <p>571-457-2321</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-envelope"></i>
              </div>

              <div className="contact-info-content">
                <h4>Email</h4>
                <p>ntamerrwael@mfano.ga</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form action="" id="contact-form">
              <h2>Send Message</h2>
              <div className="input-box">
                <input type="text" required name="" />
                <span>Full Name</span>
              </div>

              <div className="input-box">
                <input type="email" required name="" />
                <span>Email</span>
              </div>

              <div className="input-box">
                <textarea required name=""></textarea>
                <span>Type your Message...</span>
              </div>

              <div className="input-box">
                <input type="submit" value="Send" name="" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ContactUsPage;

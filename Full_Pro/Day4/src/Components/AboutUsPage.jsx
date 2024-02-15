// AboutUsPage.js

import React from 'react';
import './AboutUsPage.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const AboutUsPage = () => {
  return (
    <div>
    <nav className='abtnavbar'>
    <div className="abtbrand">
      {/* <FontAwesomeIcon icon={faBook} className="Plearning-icon" /> */}
      LearnQuir
    </div>
    <ul className="abtnav-list">
      <li className="abtnav-item">
        <a href="#" className="abtnav-link">
          <Link to='/Courses'>
          Courses
          </Link>
        </a>
      </li>
      <li className="abtnav-item">
        <a href="#" className="abtnav-link">
        <Link to='/ViewEnquiry'>
          Enquiry
          </Link>
        </a>
      </li>
      {/* <li className="abtnav-item">
        <a href="#" className="abtnav-link">
        <Link to='/Courses'>
          Dashboard
          </Link>
        </a>
      </li> */}
      <li className="abtnav-item">
        <a href="#" className="abtnav-link">
        <Link to='/PaymentHistory'>
          Payment
          </Link>
        </a>
      </li>
      <li className="abtnav-item">
        <a href="#" className="abtnav-link">
        <Link to='/AboutUsPage'>
          AboutUs
          </Link>
        </a>
      </li>
      <li className="abtnav-item">
        <a href="#" className="abtnav-link">
        <Link to='/Contact'>
          Contact
          </Link>
        </a>
      </li>
    </ul>
  </nav>

    <div className="about-us-container">
      <h1 className="about-us-heading">About Us</h1>
      <p className="about-us-description">
        Welcome to our online education and inquiry portal! We are dedicated to providing quality
        education and a seamless platform for learners to explore various courses and programs.
        Our mission is to make education accessible to everyone, anytime, anywhere.
      </p>

      <h2 className="mission-heading">Our Mission</h2>
      <p className="mission-description">
        Our mission is to empower individuals through education. We strive to create a
        user-friendly platform that connects learners with a diverse range of courses and
        educational resources. We believe in the transformative power of education to
        enhance lives and open doors to new opportunities.
      </p>

      <div className="approach-section">
        <h2 className="approach-heading">Our Approach</h2>
        <p className="approach-description">
          We focus on providing engaging and interactive learning experiences. Our approach
          combines cutting-edge technology, expert instructors, and personalized learning paths
          to ensure that each learner reaches their full potential.
        </p>
      </div>

      <div className="why-choose-us-section">
        <h2 className="why-choose-us-heading">Why Choose Us</h2>
        <ul className="why-choose-us-list">
          <li>Wide variety of courses from beginner to advanced levels</li>
          <li>Experienced and qualified instructors</li>
          <li>Flexible learning schedules to fit your lifestyle</li>
          <li>Interactive and hands-on learning activities</li>
          <li>Real-world projects and assessments</li>
        </ul>
      </div>

      <div className="partnerships-section">
        <h2 className="partnerships-heading">Partnerships</h2>
        <p className="partnerships-description">
          We are proud to collaborate with leading educational institutions, industry experts,
          and organizations to bring you the best learning opportunities. Our partnerships
          ensure that our courses are aligned with industry standards and provide valuable skills
          for your career development.
        </p>
      </div>

      <div className="testimonials-section">
        <h2 className="testimonials-heading">What Our Learners Say</h2>
        <div className="testimonial">
          <FontAwesomeIcon icon={faStar} className="star-icon" />
          <p className="testimonial-text">
            "Amazing platform! The courses are well-structured, and the instructors are knowledgeable.
            I've gained valuable skills that have boosted my career."
          </p>
          <p className="testimonial-author">- Sarah Johnson</p>
        </div>
        {/* Add more testimonials as needed */}
      </div>

      {/* <div className="gallery-section">
        <h2 className="gallery-heading">Our Campus Gallery</h2>
        <div className="gallery-images">
          <img src="gallery-image1.jpg" alt="Campus Image 1" className="gallery-image" />
          <img src="gallery-image2.jpg" alt="Campus Image 2" className="gallery-image" />
          <img src="gallery-image3.jpg" alt="Campus Image 3" className="gallery-image" />
        </div>
      </div> */}

      {/* <div className="contact-section">
        <h2 className="contact-heading">Contact Us</h2>
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <p className="contact-detail">Email: info@educationportal.com</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <p className="contact-detail">Phone: +1 (123) 456-7890</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <p className="contact-detail">Address: 123 Education Street, Cityville, Country</p>
          </div>
        </div>
      </div> */}



      {/* <div className="team-section">
        <h2 className="team-heading">Our Team</h2>
        <div className="team-member">
          <img src="team-member1.jpg" alt="Team Member 1" className="team-member-image" />
          <p className="team-member-name">John Doe</p>
          <p className="team-member-role">CEO</p>
        </div>
        <div className="team-member">
          <img src="team-member2.jpg" alt="Team Member 2" className="team-member-image" />
          <p className="team-member-name">Jane Smith</p>
          <p className="team-member-role">CTO</p>
        </div> */}
        {/* Add more team members as needed */}
      </div>
    </div>
    // </div>
  );
};

export default AboutUsPage;

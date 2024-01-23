// // HomePage.js

// // import React from 'react';
// import './Homepage.css'; // Import the CSS file
// import { Link } from 'react-router-dom';
// // import './Navbar.css';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
// const Homepage = () => {

//   const divStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundSize: 'cover',
//     height: '400px',
//   };
//   const slideImages = [
//     {
//       url: 'https://t4.ftcdn.net/jpg/02/37/22/81/360_F_237228143_EtDBwCK6eTnRWyRUraxXGvCHrhlSQYnV.jpg',
//     },
//     {
//       url: 'https://cdn.metro-online.com/-/media/Project/MCW/IN_Metro/Stores-and-Offers/Product-Assortment/Grocery-Hero-1392x464.jpg?rev=e9e1996b83ef4241be6b0d0c095e20db&sc_lang=en-IN&w=1392&hash=FB26914DC7411A3D3A37C82040CDBA02',
//     },
//     {
//       url: 'https://sugermint.com/wp-content/uploads/2022/06/Best-Health-Drink-for-Kids.jpg',
//     },
//     {
//       url: 'https://st.depositphotos.com/1063437/2337/i/600/depositphotos_23373292-stock-photo-groceries-in-wicker-basket-including.jpg',
//     },
//   ];


//   return (
//       <div>
//             <nav className="navbar">
//       <div className="navbar-container">
//         <h1 className="navbar-heading"> Student Enquiry Portal</h1>
//         <div className="navbar-links">
//           <Link to="/courses" className="navbar-link">Courses</Link>
//           <Link to="/enquiry" className="navbar-link">Enquiry</Link>
//           <Link to="/dashboard" className="navbar-link">Dashboard</Link>
//           <Link to="/payment-history" className="navbar-link">Payment History</Link>
//         </div>
//       </div>
//     </nav>
//     <div className="slide-container">
//       <Slide
//         images={slideImages.map((slideImage) => ({ url: slideImage.url }))}
//         prevArrow={<div className="prev-arrow">&#10094;</div>}
//         nextArrow={<div className="next-arrow">&#10095;</div>}
//       >
//         {slideImages.map((slideImage, index) => (
//           <div key={index}>
//             <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})`, height: 500 }}></div>
//           </div>
//         ))}
//       </Slide>
//     </div>
//     </div>
//   );
// };

// export default Homepage;

// Homepage.js

// import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Homepage = () => {
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '800px',
  };

  const slideImages = [
    {
      url: 'https://t4.ftcdn.net/jpg/02/37/22/81/360_F_237228143_EtDBwCK6eTnRWyRUraxXGvCHrhlSQYnV.jpg',
    },
    {
      url: 'https://cdn.metro-online.com/-/media/Project/MCW/IN_Metro/Stores-and-Offers/Product-Assortment/Grocery-Hero-1392x464.jpg?rev=e9e1996b83ef4241be6b0d0c095e20db&sc_lang=en-IN&w=1392&hash=FB26914DC7411A3D3A37C82040CDBA02',
    },
    {
      url: 'https://sugermint.com/wp-content/uploads/2022/06/Best-Health-Drink-for-Kids.jpg',
    },
    {
      url: 'https://st.depositphotos.com/1063437/2337/i/600/depositphotos_23373292-stock-photo-groceries-in-wicker-basket-including.jpg',
    },
  ];

  return (

    <div>
         <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-heading"> Student Enquiry Portal</h1>
        <div className="navbar-links">
          <Link to="/courses" className="navbar-link">Courses</Link>
          <Link to="/enquiry" className="navbar-link">Enquiry</Link>
          <Link to="/dashboard" className="navbar-link">Dashboard</Link>
          <Link to="/payment-history" className="navbar-link">Payment History</Link>
        </div>
      </div>

    </nav>
    <br></br><br></br>
      <div className="slide-container">
        <Slide
          images={slideImages.map((slideImage) => ({ url: slideImage.url }))}
          prevArrow={<div className="prev-arrow">&#10094;</div>}
          nextArrow={<div className="next-arrow">&#10095;</div>}
        >
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})`, height: 800}}></div>
            </div>
          ))}
        </Slide>
      </div>
      <br></br>
      <br></br>
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Contact Information</h3>
          <p>Email: info@studentenquiryportal.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 University Street, Cityville, Country</p>
        </div>
        <div className="footer-column">
          <h3>Social Media</h3>
          <p>
            <a href="https://www.linkedin.com/in/studentenquiryportal" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
          <p>
            <a href="https://github.com/studentenquiryportal" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
          <p>
            <a href="https://twitter.com/studentenquiry" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </p>
          <p>
            <a href="https://www.facebook.com/studentenquiryportal" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/studentenquiryportal" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
          <p>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </p>
        </div>
        <div className="footer-column">
          <h3>About Student Enquiry Portal</h3>
          <p>Your go-to platform for course inquiries, enrollment details, and academic support.</p>
          <p>Connect with us for a seamless learning experience!</p>
        </div>
      </div>
      <p className="copyright">&copy; 2024 Student Enquiry Portal. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default Homepage;




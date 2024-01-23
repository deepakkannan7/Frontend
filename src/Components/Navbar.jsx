// Navbar.jsx

import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
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
  );
};

export default Navbar;

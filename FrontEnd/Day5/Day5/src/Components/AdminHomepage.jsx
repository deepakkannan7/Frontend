// AdminHomepage.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faPlus,
  faEye,
  faClipboardList,
  faMoneyCheckAlt,
  faUsers,
  faHeart, // Added for heart icon (used as a placeholder for rating)
} from '@fortawesome/free-solid-svg-icons';
import './AdminHomepage.css';
import { Link } from 'react-router-dom';

const AdminHomepage = () => {
  const [displayedQuote, setDisplayedQuote] = useState('');
  const quote =
    'Hii Deepak,';
    useEffect(() => {
      const delay = 50; // Adjust the delay between each letter
      let currentIndex = 0;
  
      const intervalId = setInterval(() => {
        setDisplayedQuote((prev) => prev + quote[currentIndex]);
        currentIndex += 1;
  
        if (currentIndex === quote.length) {
          clearInterval(intervalId);
        }
      }, delay);
  
      return () => clearInterval(intervalId);
    }, [quote]);

  // Dummy user statistics data (replace with actual data from your backend)
  const userStatistics = {
    totalUsers: 1500,
    activeLearners: 1200,
    completedCourses: 800,
  };
  const systemHealth = {
    serverStatus: 'Online',
    systemUptime: '99.9%',
    maintenanceAlert: null, // Set to a message if there is an ongoing maintenance alert
  };
  const summaryData = {
    totalRevenue: '$150,000',
    newUsers: 50,
    pendingPayments: 5,
  };

  const quickLinks = [
    { id: 1, label: 'Add New Course', link: '/Admadcourse' },
    { id: 2, label: 'View Enquiries', link: '/AdminViewEnquiry' },
    { id: 3, label: 'Manage Payments', link: '/AdminPayment' },
    { id: 4, label: 'Manage Admissions', link: '/Admadmission' },
  ];

  const notifications = [
    { id: 1, text: 'New course added: Advanced React Development' },
    { id: 2, text: 'Payment received for Web Development 101' },
    // Add more notifications as needed
  ];

  // Dummy data for user feedback (replace with actual data from your backend)
  const userFeedback = [
    {
      id: 1,
      userImage: 'https://placekitten.com/50/50',
      username: 'John Doe',
      courseName: 'Web Development 101',
      comment: 'This course is amazing! I learned a lot.',
      rating: 5,
    },
    {
      id: 2,
      userImage: 'https://placekitten.com/50/51',
      username: 'Jane Smith',
      courseName: 'Data Science Fundamentals',
      comment: 'Excellent content and well-structured lessons.',
      rating: 4,
    },
    {
      id: 3,
      userImage: 'https://placekitten.com/50/52',
      username: 'Bob Johnson',
      courseName: 'Mobile App Development',
      comment: 'The instructor was knowledgeable and engaging.',
      rating: 4,
    },
    {
      id: 4,
      userImage: 'https://placekitten.com/50/54',
      username: 'Alice Thompson',
      courseName: 'UI/UX Design Principles',
      comment: 'The design principles explained in the course are extremely helpful. Great content!',
      rating: 5,
    },
    {
      id: 5,
      userImage: 'https://placekitten.com/50/55',
      username: 'Charlie Brown',
      courseName: 'JavaScript Fundamentals',
      comment: 'Excellent course for beginners. The explanations are clear and easy to follow.',
      rating: 4,
    },
    {
      id: 6,
      userImage: 'https://placekitten.com/50/56',
      username: 'Eva Rodriguez',
      courseName: 'Machine Learning Basics',
      comment: 'The machine learning concepts are well-explained. Enjoyed every bit of it.',
      rating: 5,
    },
    {
      id: 7,
      userImage: 'https://placekitten.com/50/57',
      username: 'Frank White',
      courseName: 'Digital Marketing Strategies',
      comment: 'The strategies provided in the course are practical and applicable. Recommended!',
      rating: 4,
    },
    // Add more feedback items as needed
  ];

  // Dummy data for recent courses
  const recentCourses = [
    {
      id: 1,
      courseName: 'Advanced React Development',
      instructor: 'John Smith',
      datePublished: '2024-02-01',
    },
    {
      id: 2,
      courseName: 'Data Visualization with D3.js',
      instructor: 'Jane Doe',
      datePublished: '2024-01-25',
    },
    {
      id: 3,
      courseName: 'React Native Development',
      instructor: 'Sarah Johnson',
      datePublished: '2024-01-15',
    },
    {
      id: 4,
      courseName: 'Python for Data Science',
      instructor: 'Michael Davis',
      datePublished: '2024-01-10',
    },
    {
      id: 5,
      courseName: 'Artificial Intelligence: A Comprehensive Guide',
      instructor: 'Emily Wilson',
      datePublished: '2023-12-28',
    },
    {
      id: 6,
      courseName: 'Cybersecurity Fundamentals',
      instructor: 'Daniel Lee',
      datePublished: '2023-12-20',
    },
    // Add more recent courses as needed
  ];

  return (
    <div>
    <nav className="Adhnavbar">
      <div className="Adhbrand">
        <FontAwesomeIcon icon={faBook} className="Adhlearning-icon" />
        LearnQuir
      </div>
      <ul className="Adhnav-list">
        <li className="Adhnav-item">
          <a to="#" className="Adhnav-link">
            <Link to='/Admadcourse'>
              Courses
            </Link>
          </a>
        </li>
        <li className="Adhnav-item">
          <a to="#" className="Adhnav-link">
            <Link to='/AdminViewEnquiry'>
              Enquiry
            </Link>
          </a>
        </li>
        {/* <li className="Adhnav-item">
          <a to="#" className="Adhnav-link">
            <Link to='/AdminHomepage'>
              Dashboard
            </Link>
          </a>
        </li> */}
        <li className="Adhnav-item">
          <a to="#" className="Adhnav-link">
            <Link to='/AdminPayment'>
              Payment
            </Link>
          </a>
        </li>
        <li className="Adhnav-item">
          <a to="#" className="Adhnav-link">
            <Link to='/Admadmission'>
              Manage Admission
            </Link>
          </a>
        </li>
      </ul>
    </nav>

    <div className="bimg1">
      <div className="overlay"></div>
      <div className="quote-container">
        <div style={{ marginTop: '100px' }}>
          <p className="display">Hi Deepak,</p>
        </div>
      </div>
      <div className="adgrid-container1">
        <div className="adgrid-left1">
          <div className="adgrid-item1">
            <FontAwesomeIcon icon={faPlus} className="adgrid-icon1" />
            <h3>Add Course</h3>
            <p>
              Expand the platform's course offerings by adding new and engaging courses for learners.
              Customize course details, upload content, and enhance the learning experience.
            </p>
          </div>
          <div className="adgrid-item1">
            <FontAwesomeIcon icon={faEye} className="adgrid-icon1" />
            <h3>View Courses</h3>
            <p>
              Explore the existing courses on the platform. Review course details, enrollment status,
              and other relevant information to stay informed about the available learning resources.
            </p>
          </div>
        </div>

        <div className="adgrid-right1">
          <div className="adgrid-item1">
            <FontAwesomeIcon icon={faClipboardList} className="adgrid-icon1" />
            <h3>View Enquiry</h3>
            <p>
              Access and manage course-related inquiries from learners. Stay organized and respond
              promptly to ensure a positive learning experience for all users.
            </p>
          </div>
          <div className="adgrid-item1">
            <FontAwesomeIcon icon={faMoneyCheckAlt} className="adgrid-icon1" />
            <h3>View Payment History</h3>
            <p>
              Track and review the payment history of learners. Monitor transactions, refunds, and
              payment statuses to ensure a smooth and transparent financial process.
            </p>
          </div>
        </div>
      </div>

      <div className="user-stats-section">
        <div className="user-stats-container">
          <div className="stat">
            <div className="stat-value">{userStatistics.totalUsers}</div>
            <div className="stat-label">Total Users</div>
          </div>
          <div className="stat">
            <div className="stat-value">{userStatistics.activeLearners}</div>
            <div className="stat-label">Active Learners</div>
          </div>
          <div className="stat">
            <div className="stat-value">{userStatistics.completedCourses}</div>
            <div className="stat-label">Completed Courses</div>
          </div>
        </div>
        <div className="chart">
          <div className="bar" style={{ height: `${userStatistics.totalUsers / 10}px` }}></div>
          <div className="bar" style={{ height: `${userStatistics.activeLearners / 10}px` }}></div>
          <div className="bar" style={{ height: `${userStatistics.completedCourses / 10}px` }}></div>
        </div>
      </div>

      <div className="system-health-section">
        <div className="system-health-container">
          <div className="health-stat">
            <div className="health-label">Server Status</div>
            <div className="health-value">{systemHealth.serverStatus}</div>
          </div>
          <div className="health-stat">
            <div className="health-label">System Uptime</div>
            <div className="health-value">{systemHealth.systemUptime}</div>
          </div>
          <div className="health-stat">
            <div className="health-label">Maintenance Alert</div>
            <div className="health-value">{systemHealth.maintenanceAlert || 'No ongoing alerts'}</div>
          </div>
        </div>
      </div>

      <div className="adgrid-container">
        <div className="adgrid-left">
          <div className="user-feedback-section">
            <h2>Recent User Feedback</h2><br></br>
            {userFeedback.map((feedback) => (
              <div key={feedback.id} className="feedback-item">
                <img src={feedback.userImage} alt={`User ${feedback.username}`} className="user-image" />
                <div className="feedback-details">
                  <div className="username">{feedback.username}</div>
                  <div className="course-name">{feedback.courseName}</div>
                  <div className="user-comment">{feedback.comment}</div>
                  <div className="user-rating">
                    {Array.from({ length: feedback.rating }, (_, index) => (
                      <FontAwesomeIcon key={index} icon={faHeart} className="rating-star" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="adgrid-right">
          <div className="recent-courses-section">
            <h2>Recent Courses</h2>
            <ul className="recent-courses-list">
              {recentCourses.map((course) => (
                <li key={course.id} className="recent-course-item">
                  <div className="course-name">{course.courseName}</div>
                  <div className="instructor">Instructor: {course.instructor}</div>
                  <div className="date-published">Published on: {course.datePublished}</div>
                </li>
              ))}
            </ul>
          </div>
            </div>
        </div>

        <div className="admin-dashboard-content">
          <div className="summary-section">
            <h2>Summary</h2>
            <div className="summary-item">
              <span className="summary-label">Total Revenue:</span>
              <span className="summary-value">{summaryData.totalRevenue}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">New Users:</span>
              <span className="summary-value">{summaryData.newUsers}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Pending Payments:</span>
              <span className="summary-value">{summaryData.pendingPayments}</span>
            </div>
          </div>

          {/* <div className="quick-links-section">
            <h2>Quick Links</h2>
            <ul className="quick-links-list">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div> */}

          <div className="notification-area">
            <h2>Notifications</h2>
            {notifications.map((notification) => (
              <div key={notification.id} className="notification-item">
                <p className="notification-text">{notification.text}</p>
                {/* Add timestamp or additional details if needed */}
              </div>
            ))}
        </div>
      </div>
    </div>
  </div>
);
};

export default AdminHomepage;

// HomePage.jsx
// import React from 'react';
// import Navbar from './Navbar'; // Assuming your Navbar component is in a separate file
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
const HomePage = () => {
  const gridsData = [
    {
      id: 1,
      title: 'Web Design Bootcamp-2024 For Beginners',
      rating: 4,
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'User Experience (UX) Design'],
      hoursOfLearning: '40 hours',
      description:
        'This web design bootcamp is designed for beginners who want to learn HTML, CSS, and the principles of responsive design and user experience. Join us to kickstart your journey into the world of web design......',
      trainer: {
        name: 'John Doe',
      },
      imageSrc:
        'https://i.ytimg.com/vi/ypsJ1soPIvY/hqdefault.jpg',
    },
    {
      id: 2,
      title: 'Data Science',
      rating: 5,
      skills: [
        'Python programming',
        'Using Python and SQL for predictive analytics',
        'Data visualization using Python',
        'ML algorithms',
      ],
      hoursOfLearning: '45 hours',
      description:
        'Study programs in data science typically focus on big data analytics, data visualization, statistics, and predictive analytics. The curriculum is designed for individuals pursuing technical job positions, such as data scientists an so on.......',
      trainer: {
        name: 'John Doe',
      },
      imageSrc:
        'https://iabac.org/blog/uploads/images/202307/image_870x_64ad296d30216.jpg',
    },
    {
      id: 3,
      title: 'Full-stack development ',
      rating: 5,
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'User Experience (UX) Design'],
      hoursOfLearning: '40 hours',
      description:
        'Full-stack development is concerned with both front-end and back-end technologies. A typical full-stack development course would familiarize you with programming languages and tools like Spring, Java, Typescript, Oracle, Git and so on......',
      trainer: {
        name: 'John Doe',
      },
      imageSrc: 'https://miro.medium.com/v2/resize:fit:1204/0*SdbfBUjEcu2R6ODl',
    },
    {
      id: 4,
      title: 'Artificial Intelligence and Machine Learning',
      rating: 4,
      skills: ['Big Data Analysis', 'Data Engineer', 'Machine learning engineer'],
      hoursOfLearning: '30 hours',
      description:
        'Artificial Intelligence (AI) and Machine Learning (ML) are the exciting technologies of the 21st century. AI and ML certifications can help boost the careers of IT professionals who have a background in mathematical or statistical fields.......',
      trainer: {
        name: 'John Doe',
      },
      imageSrc:
        'https://media.licdn.com/dms/image/D4D12AQHBn_8NLWFwCA/article-cover_image-shrink_720_1280/0/1666018644362?e=2147483647&v=beta&t=bHcMdADzo5L4Qax5zplmqUeyYYWeFvxrxdx5laa0Lc4',
    },
    {
      id: 5,
      title: ' Big Data',
      rating: 4,
      skills: [
        'Business Analytics',
        'Natural Language Processing',
        'Deep Learning ',
        'Business Intelligencen',
      ],
      hoursOfLearning: '35 hours',
      description:
        'Big data certifications can help you go after more diverse roles than specific data science jobs. You can opt for different specializations depending on your background and career aspirations......',
      trainer: {
        name: 'John Doe',
      },
      imageSrc: 'https://www.genesystechlabs.com/assets/images/services/big-data.jpg',
    },
    {
      id: 6,
      title: 'Cloud Computing',
      rating: 3,
      skills: [
        'Knowledge of serverless architecture',
        'Cloud security skills',
        'Building cloud-native technologies',
        'virtual machines, microservices',
      ],
      hoursOfLearning: '55 hours',
      description:
        'Cloud computing is one of the top IT fields that is experiencing an emerging trend in 2024. As organizations around the world go after dynamic and scalable applications, the demand for cloud services is only going to rise.......',
      trainer: {
        name: 'John Doe',
      },
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0sPrAQodGNCLJ6L39yclfGZ3BRGdbc3UiDGgsZMfH_YJKFUrlDZZvHxR929szsAWNJok&usqp=CAU',
    },
  ];

  return (
    <>
         <nav className="navbar">
      <div className="brand">
        <FontAwesomeIcon icon={faBook} className="learning-icon" />
        LearnHub
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Courses
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Enquiry
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Payment
          </a>
        </li>
      </ul>
    </nav>
      <div className="grid-container">
        <div className="grid-box left-box">
          <h2>Anytime Anywhere Learn on your suitable Schedule</h2>
          <p>
            We now accept the fact that learning is a lifelong process of keeping abreast of change. And the most pressing task is to teach people how to learnEvery act of conscious learning requires the willingness to suffer an injury to one's self-esteem. That is why young children, before they are aware of their own self-importance, learn so easily.The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.
          </p>
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-box" />
            <button className="search-button">Search</button>
          </div>
        </div>
        <div className="grid-box right-box">
          <img
            src="https://daninstitute.com/wp-content/uploads/2021/11/how-online-courses-are-enlarging-employment-chances-for-students-2.jpg"
            alt="Right Box Image"
            className="right-box-image"
          />
        </div>
      </div>
      <div className="logos-container">
        {/* Logo containers here */}
      </div>
      <div className="popular-courses-section">
        <h1>Our Popular Courses</h1>
        {/* Add content for popular courses here */}
      </div>
      <div className="learning-quotes">
        <p>
          Education is the most powerful weapon which you can use to change the world
        </p>
      </div>
      <div className="grids-section">
        {gridsData.map((grid) => (
          <div key={grid.id} className="grid-item">
            <img src={grid.imageSrc} alt={`Grid ${grid.id}`} className="grid-image" />
            <div className="grid-title">{grid.title}</div>
            <div className="star-rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="star-icon"
                  role="img"
                  aria-label="star"
                  style={{ opacity: index + 1 <= grid.rating ? 1 : 0.3 }}
                >
                  ⭐
                </span>
              ))}
            </div>
            <div className="course-description">
              <p>{grid.description}</p>
            </div>
            <div className="trainer-info">
              <p>
                <span className="subheading">Trainer:</span> {grid.trainer.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                <span className="subheading">Hours of Learning:</span> {grid.hoursOfLearning}
              </p>
            </div>
            <div className="enroll-button-container">
              <button className="enroll-button">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <p>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </p>
            <p>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </p>
            <p>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <p>
              <a href="#top">Home</a>
            </p>
            <p>
              <a href="#popular-courses">Popular Courses</a>
            </p>
            {/* Add more quick links as needed */}
          </div>

          <div className="footer-section">
            <h3>Online Courses</h3>
            <p>Explore our wide range of online courses to enhance your skills and knowledge.</p>
            <p>
              <a href="#popular-courses">Browse Courses</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Your Website Name. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;

  // import React from 'react';
  import  { useState,useEffect } from 'react';
  import PropTypes from 'prop-types';
  import { useParams } from 'react-router-dom';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {  faSync,faGlobe,faLanguage,faCheck,faStar,faClock,faLaptop,faBook,faMobileAlt,faAward} from '@fortawesome/free-solid-svg-icons';
  // import StarRating from 'react-rating-stars-component';
  import './Aiml.css'; // Import your CSS file

  const Aiml = ({ gridsData }) => {
    const { id } = useParams();
    const course = gridsData.find((grid) => grid.id.toString() === id);
    const [seeMore, setSeeMore] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 30); // Adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const keyTopics = [
    "Introduction to Artificial Intelligence and Machine Learning (AIML)",
    "Machine Learning Algorithms and Models",
    "Supervised Learning, Unsupervised Learning, and Reinforcement Learning",
    "Data Preprocessing and Feature Engineering",
    "Model Evaluation and Hyperparameter Tuning",
    "Natural Language Processing (NLP)",
    "Computer Vision",
    "Neural Networks and Deep Learning",
    "Ensemble Learning",
    "Explainable AI and Interpretability",
    "AI Ethics and Bias",
    "AI in Real-world Applications",
    "AIML Project Development",
    "Deploying Machine Learning Models",
    "Continuous Learning in AIML",
    "Future Trends in AIML",
  ];
  
    const displayedKeyTopics = seeMore ? keyTopics : keyTopics.slice(0, 3);
    return (

      <div>
        <nav className={`Dnavbar ${isFixed ? 'fixed' : ''}`}>
  <div className="Dbrand">
    <FontAwesomeIcon icon={faBook} className="Dlearning-icon" />
    LearnHub
  </div>
  <ul className="Dnav-list">
    <li className="Dnav-item">
      <a href="#" className="Dnav-link">
        Courses
      </a>
    </li>
    <li className="Dnav-item">
      <a href="#" className="Dnav-link">
        Enquiry
      </a>
    </li>
    <li className="Dnav-item">
      <a href="#" className="Dnav-link">
        Dashboard
      </a>
    </li>
    <li className="Dnav-item">
      <a href="#" className="Dnav-link">
        Payment
      </a>
    </li>
    <li className="Dnav-item">
      <a href="#" className="Dnav-link">
        AboutUs
      </a>
    </li>
    <li className="Dnav-item">
      <a href="#" className="Dnav-link">
        Contact
      </a>
    </li>
  </ul>
</nav>
    
      <div className="custom-div">
        <img src={course.imageSrc} alt={`Course ${course.id}`} className="custom-image" />
        <div className="text-content">
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <p className="trainer-name">Created by {course.trainer.name}</p>
          <p className="last-updated">
            <FontAwesomeIcon icon={faSync} className="update-icon" /> Last Updated: {course.lastUpdated}
            <FontAwesomeIcon icon={faGlobe} className="globe-icon" /> English
            <FontAwesomeIcon icon={faLanguage} className="language-icon" /> 
            <span>English [Auto], Arabic [Auto], <a href="#" className="language-link">14 more</a></span>
          </p>
        </div>
      </div>
  <div className="content-container">
    <div className="learn-grid">
      <h2 className="learn-title">What you'll learn</h2>
      <div className="points-list">
        {/* Add your list of learning points here */}
        <div className="point-row">
        <div className="point-column">
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Understanding the fundamentals of Artificial Intelligence and Machine Learning (AIML).</p>
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Exploring various machine learning algorithms for tasks like classification and regression.</p>
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Learning the principles of supervised learning for building predictive models.</p>
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Uncovering the concepts of unsupervised learning for tasks like clustering and dimensionality reduction.</p>
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Applying natural language processing (NLP) techniques for language-related tasks.</p>
</div>
<div className="point-column">
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Understanding the foundations of neural networks and deep learning.</p>
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Utilizing machine learning libraries such as TensorFlow or PyTorch.</p>
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Implementing reinforcement learning concepts for decision-making systems.</p>
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Exploring real-world applications of AI and ML in various industries.</p>
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Gaining hands-on experience through practical projects to reinforce learned concepts.</p>
</div>

</div>
        {/* Add more points as needed */}
      </div>
    </div>
    <div className={`additional-grid ${isFixed ? 'fixed' : ''}`}>
    <h2 className="certificate-heading">Professional Certificate-6 course series</h2>
    <p>Earn a career credential that demonstrates your expertise</p>
    <hr className="line" />
    <div className="star-rating">
    <FontAwesomeIcon icon={faStar} className="single-star-icon" style={{ color: 'yellow' }} />
    <span className="rating-value">{course.rating}</span>
    <span className="comments-value">({course.comments}k reviews)</span>
  </div>
  
  <div className="experience-info">
    <p className="experience-level"><strong>Beginner level</strong></p>
  <p className='recommended-experience'>Recommended experience</p>
</div>

  <div className="schedule-info">
    <p className="schedule-text"><strong>Flexible schedule</strong></p>
    <p className="pace-text">Learn at your own pace</p>
  </div>

  <div className="credit-info">
    <p className="credit-text"><strong>Earn degree credit</strong></p>
    <p className="learn-more-text"><a href="#" className="learn-more-link">Learn more</a></p>
  </div>
   
  <div className="button-container">
  <div className="start-button">
    <button className="start-button">
      Start at ${course.courseFee}
    </button>
  </div>

  <div className="enquiry-button">
    <button className="enquiry-button">
      Make Enquiry
    </button>
  </div>
</div>
    </div> 
  </div>

  <div className="additional-info-grid">
  <h2 className="additional-info-heading">This course includes</h2>
  <div className="include-list">
    <div className="include-column">
      <p><FontAwesomeIcon icon={faClock} className="include-icon" /> 22 hours on-demand video</p>
      <p><FontAwesomeIcon icon={faLaptop} className="include-icon" /> 19 coding exercises</p>
      <p><FontAwesomeIcon icon={faBook} className="include-icon" /> 15 articles</p>
    </div>
    <div className="include-column">
      <p><FontAwesomeIcon icon={faMobileAlt} className="include-icon" /> Access on mobile and TV</p>
      <p><FontAwesomeIcon icon={faAward} className="include-icon" /> Certificate of completion</p>
    </div>
  </div>
</div> 

<div className="top-companies-grid">
  <h2 className="top-companies-heading">Top companies offer this course to their employees</h2>
  <p>This course was selected for our collection of top-rated courses trusted by businesses worldwide.</p>
  
  {/* Logos and names container */}
  <div className="company-logos-container">
    {/* Example logos (replace with your own) */}
    <div className="company-logo">
      <img src="https://logomak.com/blog/wp-content/uploads/2023/09/Apple-Logo-500x281-min.png" alt="Company 1" />
      <p>Apple</p>
    </div>
    <div className="company-logo">
      <img src="https://banner2.cleanpng.com/20180324/ujw/kisspng-windows-7-microsoft-logo-windows-8-microsoft-5ab6ff6b526bf9.4269304415219423793376.jpg" alt="Company 2" />
      <p>Microsoft</p>
    </div>
    <div className="company-logo">
      <img src="https://static.javatpoint.com/top10-technologies/images/top-10-software-companies-in-india4.png" alt="Company 3" />
      <p>Wipro</p>
    </div>
    <div className="company-logo">
      <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/accenture-logo.png" alt="Company 3" />
      <p>Accenture</p>
    </div>
    {/* Add more logos as needed */}
  </div>
</div>

<div className="requirements-section">
  <h2 className="requirements-heading">Requirements</h2>
  <p>Access to a computer with an internet connection.</p>
</div>


<div className="description-key-topics-section">
        <h2 className="description-heading">Description</h2>
        <p className="description-text">
        Artificial Intelligence and Machine Learning (AIML) are cutting-edge technologies that empower computers to mimic human intelligence and learn from data to improve performance over time.
         This field encompasses a broad range of techniques and approaches aimed at enabling machines to perform tasks that typically require human intelligence.
         Some key Topics to be covered are,
        </p>

        <div className="key-text">
          {displayedKeyTopics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </div>

        {!seeMore && (
          <a href="#" onClick={() => setSeeMore(true)} className="see-more-link">
            See more...
          </a>
        )}
      </div>

      </div>
 
      
    );
  };

  Aiml.propTypes = {
    gridsData: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        trainer: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired, 
        comments:PropTypes.number.isRequired,
      })
    ).isRequired,
  };

  export default Aiml;

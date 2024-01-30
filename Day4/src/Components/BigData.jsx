  // import React from 'react';
  import  { useState,useEffect } from 'react';
  import PropTypes from 'prop-types';
  import { useParams } from 'react-router-dom';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {  faSync,faGlobe,faLanguage,faCheck,faStar,faClock,faLaptop,faBook,faMobileAlt,faAward} from '@fortawesome/free-solid-svg-icons';
  // import StarRating from 'react-rating-stars-component';
  import './FullStack.css'; // Import your CSS file

  const BigData = ({ gridsData }) => {
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
    "Introduction to Big Data",
    "Big Data Technologies and Ecosystem",
    "Data Storage and Retrieval in Big Data",
    "Big Data Processing Frameworks (Hadoop, Spark, Flink)",
    "Distributed Computing Principles",
    "Data Ingestion and Integration in Big Data",
    "Data Warehousing and OLAP",
    "NoSQL and NewSQL Databases",
    "Big Data Analytics and Data Mining",
    "Real-time Big Data Processing",
    "Machine Learning in Big Data",
    "Graph Analytics in Big Data",
    "Big Data Security and Privacy",
    "Scalability and Performance in Big Data",
    "Cloud Computing and Big Data",
    "Big Data Governance and Compliance",
    "Big Data Use Cases and Case Studies",
    "Big Data Project Development",
    "Big Data Deployment and Operations",
    "Continuous Learning in Big Data",
    "Future Trends in Big Data",
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
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Understanding the fundamentals of Big Data and its significance in modern computing.</p>
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Exploring distributed computing frameworks, such as Apache Hadoop and Apache Spark.</p>
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Learning the principles of data storage and processing at scale.</p>
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Managing and analyzing large datasets with tools like Hadoop Distributed File System (HDFS).</p>
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Implementing data processing using MapReduce paradigm.</p>
</div>
<div className="point-column">
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Exploring NoSQL databases, such as MongoDB and Cassandra, for scalable and flexible data storage.</p>
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Understanding data streaming technologies for real-time analytics.</p>
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Utilizing big data processing engines and tools for analytics and machine learning (e.g., Spark MLlib).</p>
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Implementing data warehousing solutions for efficient querying and reporting.</p>
    <p><FontAwesomeIcon icon={faCheck} className="tick-icon" /> Gaining practical experience through hands-on projects to solve real-world big data challenges.</p>
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
        Big Data encompasses the management and analysis of extensive and diverse datasets generated by various sources such as transactions, social media, and sensors. 
        The term "Big" emphasizes the colossal volume, high velocity, varied formats, and the inherent value of this data.
         Dealing with Big Data involves overcoming challenges related to its volume, processing speed, variety of formats, uncertainty, and the extraction of meaningful insights.
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

  BigData.propTypes = {
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

  export default BigData;

// HomePage.jsx
// import React from 'react';
import { useEffect } from 'react';
// import Navbar from './Navbar'; // Assuming your Navbar component is in a separate file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
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

      enrollmentType: 'No', // or 'paid'
      courseFee: 2000, // Add the course fee here if it's a paid course
      comments: 1.5, // Add the number of comments here
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
      lastUpdated:'2023/01/28',
      hoursOfLearning: '45 hours',
      description:
        'Study programs in data science typically focus on big data analytics, data visualization, statistics, and predictive analytics. The curriculum is designed for individuals pursuing technical job positions, such as data scientists an so on.......',
      trainer: {
        name: 'John Doe',
      },

      enrollmentType: 'No', // or 'paid'
      courseFee: 2000, // Add the course fee here if it's a paid course
      comments: 2, // Add the number of comments here
      imageSrc:
        'https://cdn1.expresscomputer.in/wp-content/uploads/2022/11/21123050/EC_Data_Science_Technology_750.jpg',
    },
    {
      id: 3,
      title: 'Full-stack development ',
      rating: 3,
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'User Experience (UX) Design'],
      hoursOfLearning: '40 hours',
      description:
        'Full-stack development is concerned with both front-end and back-end technologies. A typical full-stack development course would familiarize you with programming languages and tools like Spring, Java, Typescript, Oracle, Git and so on......',
      trainer: {
        name: 'John Doe',
      },
      enrollmentType: 'No', // or 'paid'
      courseFee: 4000, // Add the course fee here if it's a paid course
      comments: 1.5, // Add the number of comments here
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
      enrollmentType: 'No', // or 'paid'
      courseFee: 6000, // Add the course fee here if it's a paid course
      comments: 2.5, // Add the number of comments here
      imageSrc:
        'https://media.licdn.com/dms/image/D4D12AQHBn_8NLWFwCA/article-cover_image-shrink_720_1280/0/1666018644362?e=2147483647&v=beta&t=bHcMdADzo5L4Qax5zplmqUeyYYWeFvxrxdx5laa0Lc4',
    },
    {
      id: 5,
      title: ' Big Data',
      rating: 3,
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
      enrollmentType: 'No', // or 'paid'
      courseFee: 5000, // Add the course fee here if it's a paid course
      comments: 3, // Add the number of comments here
      imageSrc: 'https://www.genesystechlabs.com/assets/images/services/big-data.jpg',
    },
    {
      id: 6,
      title: 'Cloud Computing',
      rating: 4,
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
      enrollmentType: 'No', // or 'paid'
      courseFee: 6500, // Add the course fee here if it's a paid course
      comments: 3.5, // Add the number of comments here
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0sPrAQodGNCLJ6L39yclfGZ3BRGdbc3UiDGgsZMfH_YJKFUrlDZZvHxR929szsAWNJok&usqp=CAU',
    },
    {
        id: 7,
        title: 'Business Intelligence',
        rating: 2,
        skills: [
          'Data mining and analytics',
          'Data visualization',
          'Management reporting',
          ' Hadoop',
        ],
        hoursOfLearning: '50 hours',
        description:
          'BI professionals put their numerical ability to work and solve real-world business problems. Their insights can translate into actionable metrics, leading to changes in planning, operations, product development, and strategic management........',
        trainer: {
          name: 'John Doe',
        },
        enrollmentType: 'free', // or 'paid'
        courseFee: 6500, // Add the course fee here if it's a paid course
        comments: 1, // Add the number of comments here
        imageSrc:
          'https://solutionsreview.com/business-intelligence/files/2021/05/Best-Business-Intelligence-Certifications-Custom.png',
      },
      {
        id: 8,
        title: 'Project Management',
        rating: 2,
        skills: [
          'Knowledge of serverless architecture',
          'Cloud security skills',
          'Building cloud-native technologies',
          'virtual machines, microservices',
        ],
        hoursOfLearning: '25 hours',
        description:
          'Project management is one of the trending courses 2024 has generated interest in, for both employers and aspirants. Project managers ensure that work assignments are delivered within time and budget constraints........',
        trainer: {
          name: 'John Doe',
        },
        enrollmentType: 'No', // or 'paid'
        courseFee:4500, // Add the course fee here if it's a paid course
        comments: 3, // Add the number of comments here
        imageSrc:
          'https://cmd.wichita.edu/wp-content/uploads/2019/07/Master-PM-Certificate-Logo.jpg',
      },
      {
        id: 9,
        title: 'Software Development',
        rating: 4,
        skills: [
          'Knowledge of serverless architecture',
          'Cloud security skills',
          'Building cloud-native technologies',
          'virtual machines, microservices',
        ],
        hoursOfLearning: '60 hours',
        description:
          'The primary duties of a software development job include designing, managing, and testing software applications. Being successful in this field requires efficiency in writing and implementing code.......',
        trainer: {
          name: 'John Doe',
        },
        enrollmentType: 'No', // or 'paid'
        courseFee: 7000, // Add the course fee here if it's a paid course
        comments: 1.5, // Add the number of comments here
        imageSrc:
          'https://5.imimg.com/data5/SELLER/Default/2021/5/CY/TF/HW/120520500/softeware-product-2-500x500.png',
      },
      {
        id: 10,
        title: 'Cybersecurity',
        rating: 5,
        skills: [
          'Knowledge of serverless architecture',
          'Cloud security skills',
          'Building cloud-native technologies',
          'virtual machines, microservices',
        ],
        hoursOfLearning: '55 hours',
        description:
          'In recent years, the instances of data breaches and cyber attacks faced by companies have increased. In the wake of rising cyber crimes, the demand for security experts has also picked up.......',
        trainer: {
          name: 'John Doe',
        },
        enrollmentType: 'No', // or 'paid'
        courseFee: 8000, // Add the course fee here if it's a paid course
        comments: 3.2, // Add the number of comments here
        imageSrc:
          'https://www.tamilboomi.com/content/images/size/w960/2023/09/cybersecurity.png',
      },
      {
        id: 11,
        title: 'Networking',
        rating: 3,
        skills: [
          'Knowledge of serverless architecture',
          'Cloud security skills',
          'Building cloud-native technologies',
          'virtual machines, microservices',
        ],
        hoursOfLearning: '20 hours',
        description:
          'Hardware and networking professionals build and maintain computer networks and ensure their smooth functioning, thus contributing to organizational success......',
        trainer: {
          name: 'John Doe',
        },
        enrollmentType: 'free', // or 'paid'
        courseFee: 6500, // Add the course fee here if it's a paid course
        comments: 2.7, // Add the number of comments here
        imageSrc:
          'https://i.ytimg.com/vi/qiQR5rTSshw/maxresdefault.jpg',
      },
      {
        id: 12,
        title: 'DevOps',
        rating: 4,
        skills: [
          'Knowledge of serverless architecture',
          'Cloud security skills',
          'Building cloud-native technologies',
          'virtual machines, microservices',
        ],
        hoursOfLearning: '50 hours',
        description:
          'As the title suggests, DevOps combines the Development and Operations arms of software applications. In today’s fast-paced marketplace, tech companies need to stay ahead of their competitors......',
        trainer: {
          name: 'John Doe',
        },
        enrollmentType: 'No', // or 'paid'
        courseFee: 5000, // Add the course fee here if it's a paid course
        comments: 1.1, // Add the number of comments here
        imageSrc:
          'https://media.licdn.com/dms/image/D5612AQF_6NWEpegcDw/article-cover_image-shrink_720_1280/0/1703496523671?e=2147483647&v=beta&t=iX5bV6ptqfMvqDHr97KludibNgLMW-p8O5bP6iJSJ6s',
      },
      {
        id: 13,
        title: 'Blockchain',
        rating: 4,
        skills: [
          'Knowledge of serverless architecture',
          'Cloud security skills',
          'Building cloud-native technologies',
          'virtual machines, microservices',
        ],
        hoursOfLearning: '58 hours',
        description:
          'Blockchain is a rapidly growing discipline capable of bringing about significant transformations in the fields of real estate, healthcare, finance, insurance, among several others.......',
        trainer: {
          name: 'John Doe',
        },
        enrollmentType: 'free', // or 'paid'
        courseFee: 6500, // Add the course fee here if it's a paid course
        comments: 4.2, // Add the number of comments here
        imageSrc:
          'https://coursecouponclub.com/wp-content/uploads/2022/02/BLOCKCHAIN-3C.png',
      },
      {
        id: 14,
        title: ' Internet of Things',
        rating: 2,
        skills: [
          'Knowledge of serverless architecture',
          'Cloud security skills',
          'Building cloud-native technologies',
          'virtual machines, microservices',
        ],
        hoursOfLearning: '55 hours',
        description:
          'IoT enables the exchange of information between people, things, and processes. Examples of “things” include wearable health monitors, smart home security systems, wireless inventory trackers, biometric scanners, and other connected appliances......',
        trainer: {
          name: 'John Doe',
        },
        enrollmentType: 'No', // or 'paid'
        courseFee: 8000, // Add the course fee here if it's a paid course
        comments: 1.1, // Add the number of comments here
        imageSrc:
          'https://www.kanektify.com/wp-content/uploads/2020/05/IoT.jpg',
      },
      {
        id: 15,
        title: 'Digital Marketing',
        rating: 3,
        skills: [
          'Knowledge of serverless architecture',
          'Cloud security skills',
          'Building cloud-native technologies',
          'virtual machines, microservices',
        ],
        hoursOfLearning: '55 hours',
        description:
          'Digital marketing is an exciting subject for professionals like brand managers, sales personnel, entrepreneurs, and marketers. With increasing internet penetration and online activity, the scope of traditional marketing has also expanded.......',
        trainer: {
          name: 'John Doe',
        },
        enrollmentType: 'free', // or 'paid'
        courseFee: 6500, // Add the course fee here if it's a paid course
        comments: 2.3, // Add the number of comments here
        imageSrc:
          'https://hpaconsultant.com/wp-content/uploads/2016/04/digital-marketing-course-HPA.png',
      },
  ];
    // ... (your existing code)

    useEffect(() => {
      // Scroll to the top when the component mounts
      window.scrollTo(0, 0);
  
      // Add event listener to scroll to the top when the Enroll Now button is clicked
      const enrollButtons = document.querySelectorAll('.Cenroll-button');
      enrollButtons.forEach((button) => {
        button.addEventListener('click', () => {
          window.scrollTo(0, 0);
        });
      });
     }, []);

  return (
    <>
    <nav className="Cnavbar">
  <div className="Cbrand">
    <FontAwesomeIcon icon={faBook} className="Clearning-icon" />
    LearnHub
  </div>
  <ul className="Cnav-list">
{/* Inside the .Cnav-list */}
<li className="Cnav-item">
   <a href="#" className="Cnav-link">
      <Link to='/Courses'>
         Courses
      </Link>
   </a>
</li>
<li className="Cnav-item">
   <a href="#" className="Cnav-link">
      <Link to='/Enquiry'>
         Enquiry
      </Link>
   </a>
</li>
<li className="Cnav-item">
   <a href="#" className="Cnav-link">
      <Link to='/Dashboard'>
         Dashboard
      </Link>
   </a>
</li>
<li className="Cnav-item">
   <a href="#" className="Cnav-link">
      <Link to='/Payment'>
         Payment
      </Link>
   </a>
</li>
{/* New items */}
<li className="Cnav-item">
   <a href="#" className="Cnav-link">
      <Link to='/AboutUs'>
         About Us
      </Link>
   </a>
</li>
<li className="Cnav-item">
   <a href="#" className="Cnav-link">
      <Link to='/Contact'>
         Contact
      </Link>
   </a>
</li>
  </ul>
</nav>
      <div className="Cgrid-container">
        <div className="Cgrid-box Cleft-box">
          <h2>Anytime Anywhere Learn on your suitable Schedule</h2>
          <p>
            We now accept the fact that learning is a lifelong process of keeping abreast of change. And the most pressing task is to teach people how to learnEvery act of conscious learning requires the willingness to suffer an injury to one's self-esteem. That is why young children, before they are aware of their own self-importance, learn so easily.The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.
          </p>
          <div className="Csearch-container">
            <input type="text" placeholder="Search..." className="Csearch-box" />
            <button className="Csearch-button">Search</button>
          </div>
        </div>
        <div className="Cgrid-box Cright-box">
          <img
            src="https://daninstitute.com/wp-content/uploads/2021/11/how-online-courses-are-enlarging-employment-chances-for-students-2.jpg"
            alt="Right Box Image"
            className="Cright-box-image"
          />
        </div>
      </div>
      <div className="Clogos-container">
        {/* Logo containers here */}
      </div>
      <div className="Cpopular-courses-section">
        <h1>Enroll To Explore</h1>
        {/* Add content for popular courses here */}
      </div>
      {/* <div className="learning-quotes">
        <p>
          Education is the most powerful weapon which you can use to change the world
        </p>
      </div> */}
      <div className="Cgrids-section">
        {gridsData.map((grid) => (
          <div key={grid.id} className="Cgrid-item">
            <img src={grid.imageSrc} alt={`Grid ${grid.id}`} className="Cgrid-image" />
            <div className="Cgrid-title">{grid.title}</div>
            <div className="Cstar-rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="Cstar-icon"
                  role="img"
                  aria-label="star"
                  style={{ opacity: index + 1 <= grid.rating ? 1 : 0.3 }}
                >
                  ⭐
                </span>
              ))}
            </div>
            <div className="Ccourse-description">
              <p>{grid.description}</p>
            </div>
            <div className="Ctrainer-info">
              <p>
                <span className="Csubheading">Trainer:</span> {grid.trainer.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                <span className="Csubheading">Hours of Learning:</span> {grid.hoursOfLearning}
              </p>
              <div style={{ margin: '10px 0' }}></div>
              <p>
    <span className="Csubheading">Enrollment:</span>
    {grid.enrollmentType === 'free' ? (
      <span style={{ color: 'green', fontWeight: 'bold' }}>...Free...</span>
    ) : (
      <span style={{ color: 'red', fontWeight: 'bold' }}>Rs. {grid.courseFee}</span>
    )}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span className="Csubheading">Comments:</span> {grid.comments}k
  </p>
  

            </div>
            {/* <div className="Cenroll-button-container">
              {grid.id === 2 ? (
                <Link to="/DataScience">
                  <button className="Cenroll-button">Enroll Now</button>
                </Link>
              ) : grid.id === 1 ? (
                <Link to="/HomePage">
                  <button className="Cenroll-button">Enroll Now</button>
                </Link>
              ) : (
                <button className="Cenroll-button">Enroll Now</button>
              )}
            </div>
          </div> */}
 <div className="Cenroll-button-container">
              {/* Use Link conditionally based on course id */}
              {grid.id === 2 ? (
                <Link to={`/DataScience/${grid.id}`}>
                  <button className="Cenroll-button">Enroll Now</button>
                </Link>
              ) : grid.id === 1 ? (
                <Link to={`/WebDesign/${grid.id}`}>
                  <button className="Cenroll-button">Enroll Now</button>
                </Link>
              ) : grid.id === 3 ? (
                <Link to={`/FullStack/${grid.id}`}>
                  <button className="Cenroll-button">Enroll Now</button>
                </Link>
              ) : grid.id === 4 ? (
                <Link to={`/Aiml/${grid.id}`}>
                  <button className="Cenroll-button">Enroll Now</button>
                </Link>
              ): grid.id === 5 ? (
                <Link to={`/BigData/${grid.id}`}>
                  <button className="Cenroll-button">Enroll Now</button>
                </Link>
              ):(
                <button className="Cenroll-button">Enroll Now</button>
              )}
            </div>
</div>
        ))}
      </div>
    </>
  );
};

export default Courses;

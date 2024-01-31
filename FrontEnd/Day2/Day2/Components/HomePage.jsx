// HomePage.jsx
// import React from 'react';
// import Navbar from './Navbar'; // Assuming your Navbar component is in a separate file
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const HomePage = () => {
  function fok() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kof() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function gok() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kog() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function hok() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function koh() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  window.onscroll = function () {
    jet();
  };

  function jet() {
    var ilake = document.getElementById("head");
    ilake.style.top = "0px";
    ilake.style.position = "sticky";
  }

  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var wnd = window.innerHeight;
      var rtop = reveals[i].getBoundingClientRect().top;
      var rpoint = 100;

      if (rtop < wnd - rpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });

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
      url: 'https://e0.pxfuel.com/wallpapers/779/447/desktop-wallpaper-online-courses-that-will-make-you-more-successful-in-2020-online-learning.jpg',
    },
    {
      url: 'https://img.freepik.com/premium-photo/e-learning-education-internet-virtual-concept-man-things-technology-concept-webinar-online-course_750888-4.jpg',
    },
    {
      url: 'https://img.freepik.com/premium-photo/notepad-with-text-enquiry-white-background-near-pen-calculator-business-concept_284815-819.jpg',
    },
  ];
  
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
        'https://cdn1.expresscomputer.in/wp-content/uploads/2022/11/21123050/EC_Data_Science_Technology_750.jpg',
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
          <nav className="Hnavbar">
  <div className="Hbrand">
    <FontAwesomeIcon icon={faBook} className="Hlearning-icon" />
    LearnQuir
  </div>
  <ul className="Hnav-list">
    <li className="Hnav-item">
      <a href="#" className="Hnav-link">
        <Link to='/Courses'>
        Courses
        </Link>
      </a>
    </li>
    <li className="Hnav-item">
      <a href="#" className="Hnav-link">
        <Link to='/ViewEnquiry'>
        Enquiry
        </Link>
      </a>
    </li>
    {/* <li className="Hnav-item">
      <a href="#" className="Hnav-link">
        Dashboard
      </a>
    </li> */}
    <li className="Hnav-item">
      <a href="#" className="Hnav-link">
      <Link to='/PaymentHistory'>
        Payment
        </Link>
      </a>
    </li>
    <li className="Hnav-item">
      <a href="#" className="Hnav-link">
      <Link to='/AboutUsPage'>
        AboutUs
        </Link>
      </a>
    </li>
    <li className="Hnav-item">
      <a href="#" className="Hnav-link">
      <Link to='/Contact'>
        Contact
        </Link>
      </a>
    </li>
    
  </ul>
</nav>

<div className="slide-container">
        <Slide
          images={slideImages.map((slideImage) => ({ url: slideImage.url }))}
          prevArrow={<div className="prev-arrow">&#10094;</div>}
          nextArrow={<div className="next-arrow">&#10095;</div>}
        >
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})`, height: 700}}></div>
            </div>
          ))}
        </Slide>
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

      <main>
        <div id="first" className="reveal">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/growing-business-by-digital-marketing-4217800-3501667.png"
            alt=""
          />
          <div>
            <h1>We Offer Innovative Technology Courses</h1>
            <p>
            Online courses have become increasingly popular as a convenient and flexible way for individuals to acquire new skills, advance their education, and pursue personal or professional development. These courses cover a wide range of subjects, from technical and vocational skills to academic disciplines and creative pursuits. Platforms such as Coursera, edX, Udacity, and Khan Academy offer a plethora of online courses designed and curated by experts from renowned universities, institutions, and organizations worldwide. Learners can access course materials, lectures, and assignments at their own pace, making it accessible to a global audience. The interactive nature of many online courses, including forums, quizzes, and peer assessments, fosters a collaborative learning environment. Additionally, the ability to earn certificates or degrees online has added credibility to these courses, making them a valuable option for those seeking continuous learning opportunities from the comfort of their homes.
            </p>
            <h2>UI/UX Design (90%)</h2>
            <div className="comm">
              <div id="comm1"></div>
            </div>
            <h2>APP Developement (85%)</h2>
            <div className="comm">
              <div id="comm2"></div>
            </div>
            <h2>WEB Developement (70%)</h2>
            <div className="comm">
              <div id="comm3"></div>
            </div>
          </div>
        </div>

        <div id="fourth" className="reveal">
          <h2 style={{ color: "white" }}>TECHNOLOGY INDEX</h2>
          <h1 style={{ color: "white" }}>
            Real Time Monitoring Your Infrstracture Branded Degital Solutions
          </h1>
          <div id="fourth_cards">
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/data-analysis-27-681042.png"
                alt=" "
              />
              <p>DATA ANALYTICS</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/ui-ux-designer-2755964-2289563.png"
                alt=" "
              />
              <p>UI/UX DESIGN</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/web-development-3-478143.png"
                alt=" "
              />
              <p>WEB DEVELOPEMENT</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/qa-testing-3919162-3246433.png"
                alt=" "
              />
              <p>Q&A TESTING</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/team-135-386667.png"
                alt=" "
              />
              <p>DEDICATED TEAM</p>
            </div>
          </div>
        </div>

        <div id="second" className="reveal">
          <div className="container">
            <div>
              {/* <h1>WE PROVIDE</h1> */}
              <h2>Versatile Courses and Enquiries</h2>
              <p>
              Offers a versatile and accessible learning experience, catering to a diverse range of individuals across the globe. These courses provide the flexibility for learners to manage their own schedules, making education more adaptable to personal and professional commitments. Covering a vast array of subjects, online courses span academic disciplines and practical skills, ensuring a comprehensive learning environment. One of the key advantages is the opportunity to receive instruction from industry experts, accomplished professors, or professionals who bring real-world insights to the virtual classroom. With a variety of multimedia resources, including videos, interactive quizzes, and discussion forums, online courses engage learners in dynamic and effective ways, fostering a collaborative and enriching educational experience.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/men-and-woman-characters-work-together-on-project-presentation-2706075-2259871.png"
              alt=""
            />
          </div>
          <div className="container">
            <div>
              {/* <h1>WE HAVE</h1> */}
              <h2>Global Partnership</h2>
              <p>
              Global partnerships in online courses play a pivotal role in creating a rich and diverse learning environment. These collaborations involve educational institutions, online learning platforms, and industry stakeholders joining forces to offer courses that transcend geographical boundaries. Through global partnerships, learners gain access to a wider range of expertise, perspectives, and cultural insights. Universities and educational organizations may collaborate with international counterparts to develop joint programs, fostering a global exchange of knowledge. Additionally, partnerships with industry leaders can ensure that online courses align with current market needs and provide learners with practical, real-world skills. This interconnected approach not only enhances the quality of online education but also promotes cross-cultural understanding and prepares learners for a globally connected workforce. By leveraging global partnerships, online courses can offer a more comprehensive and globally relevant educational experience.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-partnership-2975816-2476892.png"
              style={{ marginTop: "50px" }}
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h2>OUR GOAL</h2>
              {/* <h2> at Low Cost</h2> */}
              <p>
               
The primary goal of online courses is to provide accessible and flexible learning opportunities to individuals, irrespective of their geographical location or time constraints. Online courses aim to democratize education by breaking down traditional barriers to learning. They offer a convenient platform for acquiring knowledge and skills, allowing learners to study at their own pace and from the comfort of their homes. 
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-goal-4352585-3618767.png"
              style={{ marginTop: "80px" }}
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h2>OUR STRENGTHS</h2>
              {/* <h2>Intelligent Use of Technology and Human Resource</h2> */}
              <p>
              Online courses come with various strengths that contribute to their popularity and effectiveness. One notable strength is flexibility, allowing learners to access educational content at their convenience, accommodating diverse schedules and lifestyles. The asynchronous nature of many online courses means that students can study when it suits them best. Additionally, online courses often offer a wide range of subjects, providing access to diverse and specialized knowledge.
              nteractivity and multimedia integration are also strengths of online courses. Many platforms incorporate engaging multimedia elements, interactive quizzes, and discussion forums, enhancing the learning experience. This interactivity helps keep learners engaged and facilitates better retention of information.
              
              </p>


            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/teamwork-3560853-2989144.png"
              alt=""
            />
          </div>
        </div>

        <div id="third" className="reveal">
          <h1 style={{ textAlign: "center" }}>OUR PROCESS</h1>
          {/* <h1 style={{ textAlign: "center" }}>
            Driving Client Results Utilizing New Innovation Points of view
          </h1> */}
          <div id="third_cards">
            <div>
              <h2>Accessing Course Content:
</h2>
              <p>
              Upon enrollment, participants gain access to the course content, which is typically available on a dedicated online learning portal. This content may include video lectures, reading materials, quizzes, assignments, and additional resources to support the learning objectives.
              </p>
            </div>
            <div>
              <h2>Flexible Learning Schedule:</h2>
              <p>
              One of the key advantages of online courses is flexibility. Learners have the freedom to engage with course materials at their own pace and according to their schedule. This asynchronous learning model allows individuals to balance their studies with work, family commitments, or other responsibilities.
              </p>
            </div>
            <div>
              <h2>Information Collection:</h2>
              <p>
              Once the initial inquiry is received, the next step involves collecting relevant information. This may include personal details, specific requirements, or queries about the product or service. Effective communication during this stage lays the foundation for a clear understanding of the customer's needs.
              </p>
            </div>
          </div>
        </div>

      
      </main>

     

      
 

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

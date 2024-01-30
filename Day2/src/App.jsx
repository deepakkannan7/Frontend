

// import React from 'react'
// import Navbar from './Components/Navbar'
import HomePage from "./Components/HomePage"
import Courses from "./Components/Courses"
import DataScience from "./Components/DataScience"
import WebDesign from "./Components/WebDesign"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import FullStack from "./Components/FullStack"
import Aiml from "./Components/Aiml"
import Login from "./Components/Login"
import ViewEnquiry from "./Components/ViewEnquiry"
import Register from "./Components/Register"
import Enquiry from "./Components/Enquiry"
import Contact from "./Components/Contact"
import PaymentHistory from "./Components/PaymentHistory"
import Admission from "./Components/Admission"
import BigData from "./Components/BigData"
import Card from "./Components/Card"
import UpiPaymentPage from "./Components/UpiPayment"
import Gpay from "./Components/UpiPayment"
import AboutUsPage from "./Components/AboutUsPage"
// import Card from "./Components/Card"
 const App = () => {
  const gridsData = [
    {
      id: 1,
      title: 'Web Design Bootcamp-2024 For Beginners',
      rating: 4,
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'User Experience (UX) Design'],
      hoursOfLearning: '40 hours',
      lastUpdated:'2023/7/7',
      description:
        'This web design bootcamp is designed for beginners who want to learn HTML, CSS, and the principles of responsive design and user experience. Join us to kickstart your journey into the world of web design......',
      trainer: {
        name: 'John Doe',
      },

      enrollmentType: 'No', // or 'paid'
      courseFee: 2500, // Add the course fee here if it's a paid course
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
        'https://iabac.org/blog/uploads/images/202307/image_870x_64ad296d30216.jpg',
    },
    {
      id: 3,
      title: 'Full-stack development ',
      rating: 3,
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'User Experience (UX) Design'],
      hoursOfLearning: '40 hours',
      lastUpdated:'2022/9/8',
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
      lastUpdated:'2023/5/27',
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
      lastUpdated:'2021/9/3',
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
  return (
  //  <HomePage></HomePage>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Register/>}></Route>
    <Route path='/Courses' element={<Courses/>}></Route>
    <Route path='/DataScience' element={<DataScience/>}></Route>
    <Route path='/DataScience/:id' element={<DataScience gridsData={gridsData} />} />
    <Route path='/WebDesign/:id' element={<WebDesign gridsData={gridsData} />} />
    <Route path='/FullStack/:id' element={<FullStack gridsData={gridsData} />} />
    <Route path='/Aiml/:id' element={<Aiml gridsData={gridsData} />} />
    <Route path='/BigData/:id' element={<BigData gridsData={gridsData} />} />
    <Route path='/Enquiry/:courseName' element={<Enquiry />} />
    <Route path='/Register' element={<Register/>}></Route>
    <Route path='/Admission' element={<Admission/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    {/* <Route path="/ViewEnquiry/:email/:courseName/:enquiryText/:enquiryDate" element={<ViewEnquiry/>} /> */}
    <Route path='/ViewEnquiry' element={<ViewEnquiry/>}></Route>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/HomePage' element={<HomePage/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/PaymentHistory' element={<PaymentHistory/>}></Route>
    <Route path='/Card' element={<Card/>}></Route>
    <Route path='/UpiPaymentPage' element={<UpiPaymentPage/>}></Route>
    <Route path='/Gpay' element={<Gpay/>}></Route>
    <Route path='/AboutUsPage' element={<AboutUsPage/>}></Route>
    </Routes>
    </BrowserRouter> 

  // <ViewEnquiry/>
  



  

  )
}
export default App



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   // const [count, setCount] = useState(0)

//   // return (
//   //   <>
//   //     <div>
//   //       <a href="https://vitejs.dev" target="_blank">
//   //         <img src={viteLogo} className="logo" alt="Vite logo" />
//   //       </a>
//   //       <a href="https://react.dev" target="_blank">
//   //         <img src={reactLogo} className="logo react" alt="React logo" />
//   //       </a>
//   //     </div>
//   //     <h1>Vite + React</h1>
//   //     <div className="card">
//   //       <button onClick={() => setCount((count) => count + 1)}>
//   //         count is {count}
//   //       </button>
//   //       <p>
//   //         Edit <code>src/App.jsx</code> and save to test HMR
//   //       </p>
//   //     </div>
//   //     <p className="read-the-docs">
//   //       Click on the Vite and React logos to learn more
//   //     </p>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Navbar from './Components/Navbar'
import HomePage from "./Components/HomePage"
import Courses from "./Components/Courses"
import DataScience from "./Components/DataScience"
import {BrowserRouter,Routes,Route} from "react-router-dom"
 const App = () => {
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
      lastUpdated:'2023/01/28',
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
  //  <HomePage></HomePage>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Courses/>}></Route>
    {/* <Route path='/DataScience' element={<DataScience/>}></Route> */}
    <Route path='/DataScience/:id' element={<DataScience gridsData={gridsData} />} />

{/* <DataScience gridsData={gridsData} /> */}

    <Route path='/HomePage' element={<HomePage/>}></Route>
    </Routes>
    </BrowserRouter> 
  )
}
export default App




// import "./App.css";
//  import Prorev from "./Prorev";
// import Insert from "./Insert";
// import Get from "./Get";
// import Update from "./Update";
// import First from "./First";
// import Delete from "./Delete";
// import Login from "./Login";
// import Signup from "./Signup";
// import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
// function App()
// {
  // return(
      // {/* <Delete/> */}
      // {/* <First/> */}
      // {/* <Login/> */}
      // {/* <Signup/> */}
      // {/* <Insert/> */}
      // <div>  
      //  <Prorev/> 
      //  </div>
      // <Update/>
    // <BrowserRouter>
    // <div className="App">
    //    <Routes>
    //  <Route path='/' element={<Login/>}></Route>
    //  <Route path='/Login' element={<Login/>}></Route>
    //  <Route path='/Signup' element={<Signup/>}></Route>
    //  <Route path='/First' element={<First/>}></Route>
    //  <Route path='/Insert' element={<Insert/>}></Route>
    //  <Route path='/Get' element={<Get/>}></Route>
    //  <Route path='/Update' element={<Update/>}></Route>
    // <Route path='/Delete' element={<Delete/>}></Route> 
    //    </Routes>
    //    </div>  
    //  </BrowserRouter> 
      
  //     );
  //   }
  // export default App;


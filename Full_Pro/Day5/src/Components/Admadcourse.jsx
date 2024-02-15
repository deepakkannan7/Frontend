// Admadcourse.js

import React, { useState } from 'react';
import './Admadcourse.css';

const Admadcourse = () => {
  const [courseData, setCourseData] = useState({
    courseId: '',
    courseName: '',
    rating: '',
    skill: '',
    hoursOfLearning: '',
    description: '',
    trainer: '',
    courseFee: '',
    imageSrc: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });

    // Clear validation error when the user starts typing
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const validationErrors = validateForm(courseData);
    setErrors(validationErrors);

    // If there are validation errors, stop the submission
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Handle form submission logic here
    console.log('Form Submitted:', courseData);
  };

  const validateForm = (data) => {
    const errors = {};

    // Basic validation example: checking if fields are not empty
    if (!data.courseId.trim()) {
      errors.courseId = '*Course ID is required';
    }

    if (!data.courseName.trim()) {
      errors.courseName = '*Course Name is required';
    }

    if (!data.rating.trim()) {
      errors.rating = '*Rating is required';
    }

    if (!data.skill.trim()) {
      errors.skill = '*Skill is required';
    }

    if (!data.hoursOfLearning.trim()) {
      errors.hoursOfLearning = '*Hours of Learning is required';
    }

    if (!data.description.trim()) {
      errors.description = '*Description is required';
    }

    if (!data.trainer.trim()) {
      errors.trainer = '*Trainer is required';
    }

    if (!data.courseFee.trim()) {
      errors.courseFee = '*Course Fee is required';
    }

    if (!data.imageSrc.trim()) {
      errors.imageSrc = '*Image Source is required';
    }

    return errors;
  };

  return (

    <div>
         <div>
      <nav className="Adadnnavbar">
        <div className="Adadnbrand">
          {/* <FontAwesomeIcon icon={faBook} className="Adhlearning-icon" /> */}
          LearnQuir
        </div>
        <ul className="Adadnnav-list">
          <li className="Adadnnav-item">
            <a to="#" className="Adadnnav-link">
              Courses
            </a>
          </li>
          <li className="Adadnnav-item">
            <a to="#" className="Adadnnav-link">
              Enquiry
            </a>
          </li>
          {/* <li className="Adadnnav-item">
            <a to="#" className="Adadnnav-link">
              Dashboard
            </a>
          </li> */}
          <li className="Adadnnav-item">
            <a to="#" className="Adadnnav-link">
              Payment
            </a>
          </li>
        </ul>
      </nav>

    <div className="adcourse-form-container">
      <h1 className="adcourse-form-heading">Course Form</h1>
      <form className="adcourse-form" onSubmit={handleSubmit}>
        <label htmlFor="courseId" className="adform-label">
          Course ID:
        </label>
        <input
          type="text"
          id="courseId"
          name="courseId"
          value={courseData.courseId}
          onChange={handleChange}
          className={`adform-input ${errors.courseId ? 'error' : ''}`}
        />
        {errors.courseId && <p className="aderror-message">{errors.courseId}</p>}

        <label htmlFor="courseName" className="adform-label">
          Course Name:
        </label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={courseData.courseName}
          onChange={handleChange}
          className={`adform-input ${errors.courseName ? 'error' : ''}`}
        />
        {errors.courseName && <p className="aderror-message">{errors.courseName}</p>}

        <label htmlFor="rating" className="adform-label">
          Rating:
        </label>
        <input
          type="text"
          id="rating"
          name="rating"
          value={courseData.rating}
          onChange={handleChange}
          className={`adform-input ${errors.rating ? 'error' : ''}`}
        />
        {errors.rating && <p className="aderror-message">{errors.rating}</p>}

        <label htmlFor="skill" className="adform-label">
          Skill:
        </label>
        <input
          type="text"
          id="skill"
          name="skill"
          value={courseData.skill}
          onChange={handleChange}
          className={`adform-input ${errors.skill ? 'error' : ''}`}
        />
        {errors.skill && <p className="aderror-message">{errors.skill}</p>}

        <label htmlFor="hoursOfLearning" className="adform-label">
          Hours of Learning:
        </label>
        <input
          type="text"
          id="hoursOfLearning"
          name="hoursOfLearning"
          value={courseData.hoursOfLearning}
          onChange={handleChange}
          className={`adform-input ${errors.hoursOfLearning ? 'error' : ''}`}
        />
        {errors.hoursOfLearning && <p className="aderror-message">{errors.hoursOfLearning}</p>}

        <label htmlFor="description" className="adform-label">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={courseData.description}
          onChange={handleChange}
          className={`adform-textarea ${errors.description ? 'error' : ''}`}
        ></textarea>
        {errors.description && <p className="aderror-message">{errors.description}</p>}

        <label htmlFor="trainer" className="adform-label">
          Trainer:
        </label>
        <input
          type="text"
          id="trainer"
          name="trainer"
          value={courseData.trainer}
          onChange={handleChange}
          className={`adform-input ${errors.trainer ? 'error' : ''}`}
        />
        {errors.trainer && <p className="aderror-message">{errors.trainer}</p>}

        <label htmlFor="courseFee" className="adform-label">
          Course Fee:
        </label>
        <input
          type="text"
          id="courseFee"
          name="courseFee"
          value={courseData.courseFee}
          onChange={handleChange}
          className={`adform-input ${errors.courseFee ? 'error' : ''}`}
        />
        {errors.courseFee && <p className="aderror-message">{errors.courseFee}</p>}

        <label htmlFor="imageSrc" className="adform-label">
          Image Source:
        </label>
        <input
          type="text"
          id="imageSrc"
          name="imageSrc"
          value={courseData.imageSrc}
          onChange={handleChange}
          className={`adform-input ${errors.imageSrc ? 'error' : ''}`}
        />
        {errors.imageSrc && <p className="aderror-message">{errors.imageSrc}</p>}

        <button type="submit" className="adform-submit-button">
          Submit
        </button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Admadcourse;

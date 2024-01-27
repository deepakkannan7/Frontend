// import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import './DataScience.css'; // Import your CSS file

const DataScience = ({ gridsData }) => {
  const { id } = useParams();
  const course = gridsData.find((grid) => grid.id.toString() === id);

  if (!course) {
    // Handle the case where the course is not found
    return <div>Course not found</div>;
  }

  return (
    <div className="custom-div">
      <img src={course.imageSrc} alt={`Course ${course.id}`} className="custom-image" />
      <div className="text-content">
        <h1>{course.title}</h1>
        <p>{course.description}</p>
        <p className="trainer-name">Created by {course.trainer.name}</p>
        <p className="last-updated">Last Updated: {course.lastUpdated}</p>
      </div>
    </div>
  );
};

DataScience.propTypes = {
  gridsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      trainer: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired, // Adjust the prop type for trainer
      // Add other prop types as needed based on your data structure
    })
  ).isRequired,
};

export default DataScience;

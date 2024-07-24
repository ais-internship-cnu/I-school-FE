import React from 'react';
import PropTypes from 'prop-types';
import 'styles/course-search-style.css';

interface CourseBlockProps {
  courseName: string;
  professor: string;
  rating: number;
}

const CourseBlock: React.FC<CourseBlockProps> = ({ courseName, professor, rating }) => (
  <div className="course-block">
    <h3>{courseName}</h3>
    <p>Professor: {professor}</p>
    <p>Rating: {rating} / 5</p>
  </div>
);

CourseBlock.propTypes = {
  courseName: PropTypes.string.isRequired,
  professor: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default CourseBlock;

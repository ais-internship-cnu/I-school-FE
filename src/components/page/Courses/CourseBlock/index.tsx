import React from 'react';
import PropTypes from 'prop-types';
import 'styles/course-search-style.css';
import { Rating, Typography, Box } from "@mui/material";
import 'styles/review-register.css';

interface CourseBlockProps {
  courseName: string;
  professor: string;
  rating: number;
}

const CourseBlock: React.FC<CourseBlockProps> = ({ courseName, professor, rating }) => {
  const handleClick = () => {
    window.location.href = `/course-details/${courseName}`;
  };

  return (
    <button className="course-block" onClick={handleClick}>
      <h3>{courseName}</h3>
      <p>Professor: {professor}</p>
      <p>
      <Rating
                name="course-rating"
                value={rating}
                size="small"
                precision={0.1}
                readOnly
            />
      </p>
    </button>
  );
};

CourseBlock.propTypes = {
  courseName: PropTypes.string.isRequired,
  professor: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default CourseBlock;

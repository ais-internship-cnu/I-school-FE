import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from '@mui/material';
import 'styles/course-search-style.css';

interface BottomSheetCourseBlockProps {
  courseName: string;
  professor: string;
  major: string;
  rating: number;
}

const BottomSheetCourseBlock: React.FC<BottomSheetCourseBlockProps> = ({ courseName, professor, major, rating }) => (
  <button className="course-block">
    <h3>{courseName}</h3>
    <p>{professor} 교수님</p>
    <p>{major}</p>
    <p>
      <Rating
        name="course-rating"
        value={rating}
        precision={0.5}
        readOnly
        sx={{ fontSize: '0.8rem' }} // 크기 조정을 위한 추가 스타일
      />
    </p>
    <div className="action-buttons">
      <button className="action-button">강의평</button>
      <button className="action-button">추가하기</button>
    </div>
  </button>
);

BottomSheetCourseBlock.propTypes = {
  courseName: PropTypes.string.isRequired,
  professor: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default BottomSheetCourseBlock;

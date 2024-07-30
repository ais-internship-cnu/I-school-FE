import React from 'react';
import PropTypes from 'prop-types';
import { Button, Rating } from '@mui/material';
import 'styles/bottom-sheet-style.css';
import { useRouter } from 'next/navigation';

interface BottomSheetCourseBlockProps {
  courseId: string;
  courseName: string;
  professor: string;
  major: string;
  rating: number;
  grade: number;
}

const BottomSheetCourseBlock: React.FC<BottomSheetCourseBlockProps> = ({ courseName, professor, major, rating, grade, courseId }) => {
  const router = useRouter();

  const handleReviewClick = () => {
    // URL 형식에 맞게 이동합니다.
    router.push(`/review-page/${encodeURIComponent(courseName)}/${encodeURIComponent(professor)}/${encodeURIComponent(courseId)}`);
  };
  
  return (
    <div className="course-block">
      <h3>{courseName}</h3>
      <p>{professor} 교수님</p>
      <p>{major}</p>
      <p>{grade}학년</p>
      <div className="rating-container">
        <Rating
          name="course-rating"
          value={rating}
          precision={0.5}
          readOnly
          sx={{ fontSize: '1rem' }}
        />
        <div className="action-buttons">
          <Button className="action-button" onClick={handleReviewClick}>강의평</Button>
          <Button className="course-button">추가하기</Button>
        </div>
      </div>
    </div>
  );
};

BottomSheetCourseBlock.propTypes = {
  courseName: PropTypes.string.isRequired,
  professor: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default BottomSheetCourseBlock;

import React, { useEffect } from 'react';
import { Button, Rating } from '@mui/material';
import 'styles/bottom-sheet-style.css';
import { useRouter } from 'next/navigation';
import useBottomSheetCourseList from 'hooks/useBottomSheetCourse';

const BottomSheetCourseBlock = () => {
  const router = useRouter();
  const { fetchAllBottomSheetCourses, bottomSheetCourseList } = useBottomSheetCourseList();

  const handleReviewClick = () => {
    bottomSheetCourseList.map(c => {
      router.push(`/review-page/${encodeURIComponent(c.courseName)}/${encodeURIComponent(c.professor)}/${encodeURIComponent(c.courseId)}`);
    });
  };

  useEffect(() => {
    if (bottomSheetCourseList.length === 0) {
      fetchAllBottomSheetCourses();
    }
  }, [fetchAllBottomSheetCourses, bottomSheetCourseList.length]);

  return (
    bottomSheetCourseList.map(c => (
      <div className="course-block" key={c.courseId}>
        <h3>{c.courseName}</h3>
        <p>{c.professor} 교수님</p>
        <p>{c.major}</p>
        <p>{c.grade}학년</p>
        <div className="rating-container">
          <Rating
            name="course-rating"
            value={c.rating}
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
    ))
  );
};

export default BottomSheetCourseBlock;
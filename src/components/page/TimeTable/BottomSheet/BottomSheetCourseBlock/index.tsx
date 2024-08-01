import React from 'react';
import { Button, Rating } from '@mui/material';
import 'styles/bottom-sheet-style.css';
import { useRouter } from 'next/navigation';
import { BottomSheetCourse } from 'types/bottomSheetCourses';

interface BottomSheetCourseBlockProps {
  course: BottomSheetCourse;
}

const BottomSheetCourseBlock: React.FC<BottomSheetCourseBlockProps> = ({ course }) => {
  const router = useRouter();

  const handleReviewClick = (courseName: string, professor: string, courseId: string) => {
    router.push(`/review-page/${encodeURIComponent(courseName)}/${encodeURIComponent(professor)}/${encodeURIComponent(courseId)}`);
  };

  return (
    <div className="course-block" key={course.courseId}>
      <h3>{course.courseName}</h3>
      <p>{course.professor} 교수님</p>
      <p>{course.major}</p>
      <p>{course.grade}학년</p>
      <div className="rating-container">
        <Rating
          name="course-rating"
          value={course.rating}
          precision={0.5}
          readOnly
          sx={{ fontSize: '1rem' }}
        />
        <div className="action-buttons">
          <Button className="action-button" onClick={() => handleReviewClick(course.courseName, course.professor, course.courseId.toString()[0])}>강의평</Button>
          <Button className="course-button">추가하기</Button>
        </div>
      </div>
    </div>
  );
};

export default BottomSheetCourseBlock;

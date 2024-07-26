import React from 'react';
import { Grid, Button, TextField } from '@mui/material';
import 'styles/course-search-style.css';
import BottomSheetCourseBlock from 'components/page/Timetable/BottomSheet/BottomSheetCourseBlock';

interface BottomSheetCourse {
  courseName: string;
  professor: string;
  major: string;
  rating: number;
}

const BottomSheetSearch: React.FC<{ courses: BottomSheetCourse[] }> = ({ courses }) => (
  <div className="bottom-sheet-container">
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Grid container direction="row" spacing={2} justifyContent="space-between" alignItems="center" className="top-section">
          <Button variant="contained">전공</Button>
          <Button variant="contained">학년</Button>
          <TextField variant="outlined" placeholder="Search..." className="search-bar" />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" spacing={2}>
          {courses.map((course, index) => (
            <Grid item key={index}>
              <BottomSheetCourseBlock
                courseName={course.courseName}
                professor={course.professor}
                major={course.major}
                rating={course.rating}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default BottomSheetSearch;

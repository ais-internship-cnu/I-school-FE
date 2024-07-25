import React, { useEffect } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import useTimetable from 'hooks/useTimetable';
import TimetableCard from './TimetableCard';
import 'styles/common.css';

const days = ['MON', 'TUE', 'WED', 'THU', 'FRI'];

const colors = [
  '#ffbaba', '#ffc092', '#cfff92', '#b0ffd9', 
  '#92ebff', '#b0c6ff', '#e1afff', '#ffb8ef'
];

const Example = () => {
  const { onCreateTimetableList, timetableList } = useTimetable();

  useEffect(() => {
    onCreateTimetableList();
  }, []);

  const generateColorMap = (courseCodes) => {
    const colorMap = {};
    courseCodes.forEach((code, index) => {
      colorMap[code] = colors[index % colors.length]; 
    });
    return colorMap;
  };

  const renderTimetable = () => {
    const timetable = [];
    
    timetable.push(
      <Grid container key="header">
        <Grid item xs={1}></Grid>
        {days.map((day) => (
          <Grid item xs={2.2} key={day} className="timetable-header">
            <Typography variant="body1" align="center">
              {day}
            </Typography>
          </Grid>
        ))}
      </Grid>
    );

    for (let i = 9; i <= 16; i++) {
      timetable.push(
        <Grid container key={i}>
          <Grid item xs={1} className="timetable-time">
            <Typography variant="body2" align="center">
              {i > 12 ? i - 12 : i}:00
            </Typography>
          </Grid>
          {days.map((day) => (
            <Grid item xs={2.2} key={day} className="timetable-cell">
              {timetableList.map((course) => {
                const courseDayMap = {
                  Monday: 'MON',
                  Tuesday: 'TUE',
                  Wednesday: 'WED',
                  Thursday: 'THU',
                  Friday: 'FRI',
                };

                const courseStartHour = parseInt(course.courseStartTime.split(':')[0]);
                const courseEndHour = parseInt(course.courseEndTime.split(':')[0]);

                if (courseDayMap[course.courseDay] === day) {
                  const backgroundColor = colorMap[course.courseCode] || '#e0e0e0';

                  // 강의명이 중앙에 위치하도록 스타일 조정
                  if (courseStartHour === i) {
                    return (
                      <div
                        key={course.courseId}
                        className="timetable-card-wrapper"
                        style={{
                          gridRow: `span ${courseEndHour - courseStartHour}`,
                          backgroundColor: backgroundColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '100%', // 셀 높이를 100%로 설정
                        }}
                      >
                        <TimetableCard course={course} backgroundColor={backgroundColor} />
                      </div>
                    );
                  } else if (courseStartHour < i && i < courseEndHour) {
                    return (
                      <div
                        key={`${course.courseId}-${i}`}
                        className="timetable-card-wrapper"
                        style={{
                          gridRow: `span 1`,
                          backgroundColor: backgroundColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '100%',
                        }}
                      >
                        <Typography variant="body2" align="center">
                          {course.courseName} 
                        </Typography>
                      </div>
                    );
                  }
                }
                return null;
              })}
            </Grid>
          ))}
        </Grid>
      );
    }

    return timetable;
  };

  const courseCodes = [...new Set(timetableList.map(course => course.courseCode))];
  const colorMap = generateColorMap(courseCodes);

  return (
    <Box className="timetable-container">
      <Grid container>
        {renderTimetable()}
      </Grid>
    </Box>
  );
};

export default Example;

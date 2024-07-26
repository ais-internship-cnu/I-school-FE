"use client";

import React, { useState } from 'react';
import Page from 'app/page';
import BottomSheetSearch from 'components/page/Timetable/BottomSheet/BottomSheetCourseBlock';
import CourseSearcher from 'components/page/Courses/CourseSearcher';
import { mockCourses } from 'mocks/reviewMock/mockData'; // Import mock data
import 'styles/common.css';
import 'styles/course-search-style.css';

const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState(mockCourses);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (searchTerm: string) => {
    const filtered = courses.filter(course =>
      course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.professor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  const handleTextInputChange = (value: string) => {
    setSearchInput(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch(searchInput);
    }
  };

  return (
    <Page title="Courses">
      <div className="component-arrangement">
        <div className="fix-top">
          
          <div className="search-container-alignment">
            <CourseSearcher 
              placeholder="교수명, 강의명 검색"
              onChange={handleTextInputChange}
              onKeyDown={handleKeyDown}
              onClick={() => handleSearch(searchInput)} 
            />
          </div>
        </div>
        <div className="courses-container">
          <BottomSheetSearch courses={filteredCourses} />
        </div>
      </div>
    </Page>
  );
};

export default CoursesPage;

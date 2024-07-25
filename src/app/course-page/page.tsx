"use client"

import React, { useState } from 'react';
import Page from 'app/page';
import Courses from 'components/page/Courses';
import CourseSearcher from 'components/page/CourseSearcher';
import { mockCourses } from 'mocks/reviewMock/mockData'; // Import mock data
import 'styles/common.css';
import 'styles/course-search-style.css';

const CoursesPage = () => {
  const [courses, setCourses] = useState(mockCourses);
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const handleSearch = (searchTerm: string) => {
    const filtered = courses.filter(course =>
      course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.professor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  var searchInput = '';

  const handleTextInputChange = (value: string) => {
    searchInput = value;
  };

  return (
    <Page title="CoursesPage">
      <div className="component-arrangement">
        <div className="fix-top">
          <div className="search-bar-and-search-button">
          <CourseSearcher placeholder="교수명, 강의명 검색" onChange={handleTextInputChange} />
          <button className="search-button" onClick={() => handleSearch(searchInput)}>검색</button>
          </div>
        </div>
        <div>
          <Courses courses={filteredCourses} />
        </div>
      </div>
    </Page>
  );
}

export default CoursesPage;


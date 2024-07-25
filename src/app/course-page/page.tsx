"use client"

import React, { useState } from 'react';
import Page from 'app/page';
import Courses from 'components/page/Courses';
import CourseSearcher from 'components/page/Courses/CourseSearcher';
import { mockCourses } from 'mocks/reviewMock/mockData'; // Import mock data
import 'styles/common.css';
import 'styles/course-search-style.css';

const CoursesPage = () => {
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

  var textInput=""

  const handleTextInputChange = (value: string) => {
    textInput=value;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch(textInput);
    }
  }

  return (
    <Page title="CoursesPage">
      <div className="component-arrangement">
        <div className="fix-top">
          <div className="header">강의실</div>
          <div className="search-container-alignment">
            <CourseSearcher placeholder="교수명, 강의명 검색"  
              onChange={handleTextInputChange} 
                onKeyDown={handleKeyDown} 
                  onClick={() => handleSearch(textInput)} />
          </div>
        </div>
        <div className="courses-container">
          <Courses courses={filteredCourses} />
        </div>
      </div>
    </Page>
  );
}

export default CoursesPage;

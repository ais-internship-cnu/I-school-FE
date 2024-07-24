"use client"

import Page from 'app/page'
import Courses from 'components/page/Courses'
import CourseSearcher from 'components/page/CourseSearcher'
import 'styles/common.css'
import 'styles/course-search-style.css'

import {mockCourses} from 'mocks/reviewMock/mockData'
import { useState } from 'react'


const CoursesPage = () => {

  const [courses, setCourses] = useState(mockCourses);
  const [filteredCourses, setFilteredCourses] = useState(courses);

  console.log(mockCourses)

  return <Page title="CoursesPage">
    <div className="container component-arrangement">
      <div className="fix-top">
        <CourseSearcher placeholder={'교수명, 강의명 검색'} onChange={function (value: string): void{}}/>
      </div>
      <br></br>
      <div>
        <Courses courses={mockCourses}/>
      </div>
      
      
      

    </div>
    
  </Page>
}

export default CoursesPage


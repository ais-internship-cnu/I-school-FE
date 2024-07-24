"use client"

import Page from 'app/page'
import Courses from 'components/page/Courses'
import CourseSearcher from 'components/page/CourseSearcher'
import 'styles/common.css'
import 'styles/course-search-style.css'


const CoursesPage = () => (
  <Page title="CoursesPage">
    <div className="container component-arrangement">
      <div>
        <CourseSearcher/>
      </div>
      <br></br>
      <div>
        <Courses courseName={'ㅇㅇㅇㅇㅇㅇㅇㅇ'} professor={'ㅇㅇㅇ'} rating={0}/>
      </div>
      
      
      

    </div>
    
  </Page>
)

export default CoursesPage

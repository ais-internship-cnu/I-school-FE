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
        <CourseSearcher placeholder={'교수명, 강의명 검색'} onChange={function (value: string): void {
          throw new Error('Function not implemented.')
        } }/>
      </div>
      <br></br>
      <div>
        <Courses courses={[]}/>
      </div>
      
      
      

    </div>
    
  </Page>
)

export default CoursesPage

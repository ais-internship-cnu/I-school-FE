"use client"

import Page from 'app/page'
import Header from 'components/page/ReviewRegister/header'
import StarRating from 'components/page/ReviewRegister/star_rating'
import CourseReview from 'components/page/ReviewRegister/course_review'
import RegisterButton from 'components/page/ReviewRegister/register_button'

const reviewRegisterPage = () => {

  return(
    <Page title="ReviewRegisterPage">
      <Header/>
      <StarRating/>
      <CourseReview/>
      <RegisterButton/>
    </Page>    
  )
}

export default reviewRegisterPage

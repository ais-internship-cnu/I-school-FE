"use client"

import Page from 'app/page'
import Review from 'components/page/Review'
import Header from 'components/page/Review/header'
import SimpleBottomNavigation from 'components/page/Review/navigation'


const ReviewPage = () => {
  return(
    <Page title="ReviewPage">
      
      <Header/>
      <Review/>
      <SimpleBottomNavigation/>
    </Page>
  )
}

export default ReviewPage

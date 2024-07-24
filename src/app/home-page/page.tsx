"use client"

import Page from "app/page"
import FreeBoardButton from "components/page/Home/free-board-button"
import HomeTitle from "components/page/Home/title"


const HomePage = () => {
  return(
    <Page title="HomePage">
      <HomeTitle/>
      <FreeBoardButton/>
    </Page>
  )
}

export default HomePage

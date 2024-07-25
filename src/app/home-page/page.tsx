"use client"

import Page from "app/page"
import FreeBoardButton from "components/page/Home/free-board-button"
import NavBar from "components/page/Home/navigator"
import HomeTitle from "components/page/Home/title"


const HomePage = () => {
  return(
    <Page title="HomePage">
      <HomeTitle/>
      <FreeBoardButton/>
      <NavBar/>
    </Page>
  )
}

export default HomePage

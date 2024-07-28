"use client"

import Page from "app/page"
import HomeButton from "components/page/Home/home-button"
import NavBar from "components/page/Home/navigator"
import HomeTitle from "components/page/Home/title"


const HomePage = () => {
  return(
    <Page title="HomePage">
      <HomeTitle/>
      <HomeButton/>
      <NavBar/>
    </Page>
  )
}

export default HomePage

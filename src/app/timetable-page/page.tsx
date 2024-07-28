"use client"

import Page from 'app/page'
import NavBar from 'components/page/Home/navigator'
import TimeTable from 'components/page/TimeTable'
import Header from 'components/page/TimeTable/Header'

const TimetablePage = () => (
  <Page title="TimetablePage">
    <Header />
    <TimeTable/>
    <NavBar/>
  </Page>
)

export default TimetablePage

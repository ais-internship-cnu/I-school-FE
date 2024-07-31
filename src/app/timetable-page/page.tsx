"use client"

import Page from 'app/page'
import NavBar from 'components/page/Home/NavBar'
import TimeTable from 'components/page/Timetable'
import Header from 'components/page/Timetable/Header'

const TimetablePage = () => (
  <Page title="TimetablePage">
    <Header />
    <TimeTable/>
    <NavBar/>
  </Page>
)

export default TimetablePage

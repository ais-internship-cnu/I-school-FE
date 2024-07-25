import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import NavBar from 'components/page/Home/navigator';
import HomePage from './home-page/page';
import TimetablePage from './timetable-page/page';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <Routes> */}
        {/* <Route path="/" element={<Link to={'/'} />} /> */}
        {/* <Route path="/timetable-page/page" element={<TimetablePage />} /> */}
      {/* </Routes> */}
      <Link to = "/">홈화면</Link>
      <Link to ="/timetable-page">시간표</Link>
    </BrowserRouter>
  );
};

export default App;

import React, { useState } from 'react';
import { Button, Drawer, TextField } from '@mui/material';
import BottomSheetCourseBlock from './BottomSheetCourseBlock';
import 'styles/bottom-sheet-style.css';
import GradeModal from '../GradeSelect';
import MajorModal from '../MajorSelect';

interface BottomSheetCourse {
  courseName: string;
  professor: string;
  major: string;
  rating: number;
}

const mockCourses: BottomSheetCourse[] = [
  {
    courseName: "데이터베이스",
    professor: "김교수",
    major: "컴퓨터공학",
    rating: 4.5,
  },
  {
    courseName: "운영체제",
    professor: "박교수",
    major: "컴퓨터공학",
    rating: 4.0,
  },
  {
    courseName: "운영체제",
    professor: "박교수",
    major: "컴퓨터공학",
    rating: 4.0,
  },
  {
    courseName: "운영체제",
    professor: "박교수",
    major: "컴퓨터공학",
    rating: 4.0,
  },
  // 더 많은 목 데이터를 추가할 수 있습니다.
];

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const CourseDrawer: React.FC<DrawerProps> = ({ open, onClose }) => {
  const [courses, setCourses] = useState(mockCourses);
  const [filteredCourses, setFilteredCourses] = useState(mockCourses);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (searchTerm: string) => {
    const filtered = courses.filter(course =>
      course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.professor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  const handleTextInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch(searchInput);
    }
  };

  // 전공, 학년 선택 버튼 누를 시 팝업 띄우기
  const [showGradeModal, setShowGradeModal] = useState(false);
  const [showMajorModal, setShowMajorModal2] = useState(false);

  const toggleGradeModal = () => {
    setShowGradeModal(!showGradeModal);
  };
  const toggleMajorModal = () => {
    setShowMajorModal2(!showMajorModal);
  };

  const handleDrawerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: '353px', // 원하는 너비 설정
          margin: 'auto', // 중앙 정렬
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
        }
      }}
    >
      <div className="drawer-content" onClick={handleDrawerClick}>
        <div className="fix-top">
          <div className="top-section">
            <Button
              onClick={toggleGradeModal}
              variant="contained"
              className="button upper-button"
            >
              학년
              <GradeModal show={showGradeModal} onClose={toggleGradeModal} />
            </Button>
            <Button
              onClick={toggleMajorModal}
              variant="contained"
              className="button upper-button"
            >
              전공
              <MajorModal show={showMajorModal} onClose={toggleMajorModal} />
            </Button>
            <input 
              type="text" 
              placeholder="교수명, 강의명 검색" 
              value={searchInput}
              onChange={handleTextInputChange}
              onKeyDown={handleKeyDown}
              className="search-bar" 
            />
          </div>
        </div>
        <div className="courses-container">
          {filteredCourses.map((course, index) => (
            <BottomSheetCourseBlock
              key={index}
              courseName={course.courseName}
              professor={course.professor}
              major={course.major}
              rating={course.rating}
            />
          ))}
        </div>
        <Button onClick={onClose} variant="contained" className='close-button'>
          닫기
        </Button>
      </div>
    </Drawer>
  );
};

export default CourseDrawer;

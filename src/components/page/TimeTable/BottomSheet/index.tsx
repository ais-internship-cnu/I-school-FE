import React, { useState } from 'react';
import { Button } from '@mui/material';
import BottomSheetCourseBlock from './BottomSheetCourseBlock';
import 'styles/bottom-sheet-style.css';

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
  // 더 많은 목 데이터를 추가할 수 있습니다.
];

const BottomSheet: React.FC = () => {
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

  return (
      <div className="bottom-sheet-container">
        <div className="fix-top">
          <div className="top-section">
            <Button 
              variant="contained" 
              className="button upper-button" 
              // sx={{ fontSize: '12px', padding: '1px 4px', borderRadius: '8px', marginRight: '5px', backgroundColor:'#595959', width:'auto', textAlign: 'center', maxWidth: '80px' }}
            >
              전공
            </Button>
            <Button 
              variant="contained" 
              className="button upper-button" 
              // sx={{ fontSize: '12px', padding: '2px 6px', borderRadius: '8px', marginRight: '8px' }}
            >
              학년
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
      </div>
  );
};

export default BottomSheet;

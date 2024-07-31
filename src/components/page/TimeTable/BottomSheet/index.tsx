import React, { useEffect, useRef, useState } from 'react';
import { Button, Drawer, TextField } from '@mui/material';
import BottomSheetCourseBlock from './BottomSheetCourseBlock';
import 'styles/bottom-sheet-style.css';
import GradeModal from '../GradeSelect';
import MajorModal from '../MajorSelect';
import useBottomSheetCourseList from 'hooks/useBottomSheetCourse'; // 훅을 임포트합니다
import { BottomSheetCourse } from 'types/bottomSheetCourses'; // 타입 임포트

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const CourseDrawer: React.FC<DrawerProps> = ({ open, onClose }) => {
  const { bottomSheetCourseList, fetchAllBottomSheetCourses } = useBottomSheetCourseList(); // 훅 사용
  const [filteredCourses, setFilteredCourses] = useState<BottomSheetCourse[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [selectedMajor, setSelectedMajor] = useState<string | null>(null);
  const [gradeButtonText, setGradeButtonText] = useState<string>('학년');
  const [majorButtonText, setMajorButtonText] = useState<string>('전공');
  const [showGradeModal, setShowGradeModal] = useState(false);
  const [showMajorModal, setShowMajorModal] = useState(false);

  // useEffect(() => {
  //   console.log('bottomSheetCourseList length:', bottomSheetCourseList.length)
  //   if (open && bottomSheetCourseList.length === 0) {
  //     fetchAllBottomSheetCourses();
  //     console.log('Fetching courses...')
  //   }
  // }, [fetchAllBottomSheetCourses, bottomSheetCourseList.length]);

  useEffect(() => {
    if (open && bottomSheetCourseList.length === 0) {
      // `open` 상태가 `true`일 때만 데이터 요청
      fetchAllBottomSheetCourses().then(() => {
        // 데이터가 로드된 후 필터링 등의 추가 작업 수행 가능
        setFilteredCourses(bottomSheetCourseList);
      });
    }
  }, [open, fetchAllBottomSheetCourses, bottomSheetCourseList]);

  // 필터링 로직 최적화
  useEffect(() => {
    if (bottomSheetCourseList.length > 0) {
      applyFilters(selectedGrade, selectedMajor);
    }
  }, [bottomSheetCourseList, selectedGrade, selectedMajor]);



  const truncateMajorName = (major: string): string => {
    return major.length > 3 ? `${major.slice(0, 3)}..` : major;
  };

  const handleSearch = (searchTerm: string) => {
    const filtered = bottomSheetCourseList.filter((course) =>
      course.course_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
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

  const toggleGradeModal = () => {
    setShowGradeModal(!showGradeModal);
  };

  const toggleMajorModal = () => {
    setShowMajorModal(!showMajorModal);
  };

  const handleGradeSelect = (grade: number) => {
    setSelectedGrade(grade);
    setGradeButtonText(`${grade}학년`);
    applyFilters(grade, selectedMajor);
  };

  const handleMajorSelect = (major: string) => {
    setSelectedMajor(major);
    setMajorButtonText(truncateMajorName(major));
    applyFilters(selectedGrade, major);
  };

  const applyFilters = (grade: number | null, major: string | null) => {
    let filtered: BottomSheetCourse[] = bottomSheetCourseList || [];
  
    if (grade !== null) {
      filtered = filtered.filter(course => course.grade === grade);
    }
    if (major !== null) {
      filtered = filtered.filter(course => course.major === major);
    }
  
    setFilteredCourses(filtered);
  };

  const handleDrawerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const resetFilters = () => {
    setSelectedGrade(null);
    setGradeButtonText('학년');
    setSelectedMajor(null);
    setMajorButtonText('전공');
    setFilteredCourses(bottomSheetCourseList);
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
              {gradeButtonText}
              <GradeModal show={showGradeModal} onClose={toggleGradeModal} onGradeSelect={handleGradeSelect} />
            </Button>
            <Button
              onClick={toggleMajorModal}
              variant="contained"
              className="button upper-button"
            >
              {majorButtonText}
              <MajorModal show={showMajorModal} onClose={toggleMajorModal} onMajorSelect={handleMajorSelect} />
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
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <BottomSheetCourseBlock
                key={index}
                courseName={course.course_name}
                professor={course.professor}
                major={course.major}
                rating={course.rating}
                grade={course.grade} 
                courseId={course.course_id[0]}/>
            ))
          ) : (
            <div className="no-results-message">
              해당 조건의 강의는 없습니다.
            </div>
          )}
        </div>
        <div className="button-container">
          <Button onClick={resetFilters} variant="contained" className='reset-button'>
            초기화
          </Button>
          <Button onClick={onClose} variant="contained" className='close-button'>
            닫기
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default CourseDrawer;

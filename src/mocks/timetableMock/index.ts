import { Course, TimetableData, TimetableState } from 'types/timetable';

export const mockCourses: Course[] = [
  {
    courseId: [1],
    courseCode: 'ECE3026',
    courseName: '네트워크',
    courseRoom: '공7 - 118',
    courseDay: ['Monday'],
    courseStartTime: ['10:00'],
    courseEndTime: ['12:30'],
    professor: '남지승',
    major: '전기전자공학'
  },
  {
    courseId: [2],
    courseCode: 'ECE4086',
    courseName: '캡디',
    courseRoom: '공7 - 218',
    courseDay: ['Tuesday'],
    courseStartTime: ['11:00'],
    courseEndTime: ['12:30'],
    professor: '박재형',
    major: '전기전자공학'
  },
  {
    courseId: [3],
    courseCode: 'ECE3088',
    courseName: '임베디드',
    courseRoom: '공7-218',
    courseDay: ['Wednesday'],
    courseStartTime: ['13:00'],
    courseEndTime: ['14:30'],
    professor: '이영우',
    major: '전기전자공학'
  },
  {
    courseId: [4],
    courseCode: 'ECE3026',
    courseName: '네트워크',
    courseRoom: '공7 - 118',
    courseDay: ['Wednesday'],
    courseStartTime: ['10:00'],
    courseEndTime: ['12:30'],
    professor: '남지승',
    major: '전기전자공학'
  },
  {
    courseId: [5],
    courseCode: 'ECE4086',
    courseName: '캡디',
    courseRoom: '공7 - 218',
    courseDay: ['Thursday'],
    courseStartTime: ['11:00'],
    courseEndTime: ['12:30'],
    professor: '박재형',
    major: '전기전자공학'
  }
];

export const mockTimetable: TimetableData = {
  timetableName: '2024 봄 학기 시간표',
  courses: mockCourses
};

export const mockTimetableState: TimetableState = {
  timetableList: mockCourses,
  courseList: mockCourses
};

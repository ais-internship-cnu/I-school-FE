import { Course, Timetable, TimetableState } from 'types/timetable';

export const mockCourses: Course[] = [
  {
    courseId: 1,
    courseName: 'Mathematics',
    courseRoom: 'Room 101',
    courseDay: 'Monday',
    courseStartTime: '09:00',
    courseEndTime: '10:30'
  },
  {
    courseId: 2,
    courseName: 'Physics',
    courseRoom: 'Room 102',
    courseDay: 'Tuesday',
    courseStartTime: '11:00',
    courseEndTime: '12:30'
  },
  {
    courseId: 3,
    courseName: 'Chemistry',
    courseRoom: 'Room 103',
    courseDay: 'Wednesday',
    courseStartTime: '13:00',
    courseEndTime: '14:30'
  }
];

export const mockTimetable: Timetable = {
  timetalbeId: 1,
  courses: mockCourses
};

export const mockTimetableState: TimetableState = {
  timetableList: mockCourses
};

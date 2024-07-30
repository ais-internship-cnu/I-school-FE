export type Course = {
  courseId: number[];
  courseCode: string;
  courseName: string;
  courseRoom: string;
  courseDay: string[];
  courseStartTime: string[];
  courseEndTime: string[];
  professor: string;
  major: string;
};

export type TimetableData = {
  timetableName: string;
  courses: Course[];
};

export type TimetableState = {
  courseList: Course[];
  timetableList: Course[];
};
export type Course = {
    courseId: number;
    courseName: string;
    courseRoom: string;
    courseDay: string;
    courseStartTime: string;
    courseEndTime: string;
  };
  
  export type Timetable = {
    timetalbeId: number;
    courses: Course[];
  };
  
  export type TimetableState = {
    timetableList: Course[]
}
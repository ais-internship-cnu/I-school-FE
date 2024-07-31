export type BottomSheetCourse = {
    course_id: string[];
    course_code: string;
    course_name: string;
    professor: string;
    major: string;  // 추가된 major 필드
    grade: number;
    credit: number;
    course_day: string[];
    course_start_time: string[];
    course_end_time: string[];
    course_room: string;
    rating: number;
};

export type BottomSheetCourses = {
    bottomSheetCourseList: BottomSheetCourse[];
  }


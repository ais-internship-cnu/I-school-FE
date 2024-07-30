export type Course = {
    course_id: number,
    courseName: string,
    professor: string,
    rating: number,
}

export type Courses = {
    courseList: Course[];
  }

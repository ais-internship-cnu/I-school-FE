export type Course = {
    courseId: number,
    courseName: string,
    professor: string,
    rating: number,
}

export type Courses = {
    courseList: Course[];
  }

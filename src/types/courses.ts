export type Course = {
    courseId: number,
    courseName: string,
    professor: string,
    rating: number,
    courseCode: string,
}

export type Courses = {
    courseList: Course[];
  }

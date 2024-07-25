export type CourseReview = {
    courseReviewId: number,
    rating: number,
    content: string,
}

export type Course = {
    courseId: number,
    courseName: string,
    courseReviews: CourseReview[],
}

export type ReviewState = {
    reviewList: CourseReview[]
}

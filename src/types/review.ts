export type Review = {
    course_name: string,
    review_star: number,
    review_content: string,
}

export type ReviewState = {
    reviewList: Review[]
}
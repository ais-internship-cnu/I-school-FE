import { Grid, Typography } from "@mui/material"
import useReview from "hooks/useReview"
import { useEffect } from "react"
import 'styles/common.css'
import ReviewCard from "./ReviewCard"
import { CourseReview } from "types/review"

const Example = () => {
  const { onCreateReviewList, reviewList } = useReview()
  const courseNo = 1

  useEffect(() => {
    onCreateReviewList(courseNo)
  }, [])

  // 평균 별점 계산 함수
  const calculateAverageRating = (): number => {
    if (reviewList.length === 0) return 0; // 리뷰가 없으면 0 반환
    const totalRating = reviewList.reduce((sum, review: CourseReview) => sum + review.rating, 0);
    return parseFloat((totalRating / reviewList.length).toFixed(1)); // 소수점 첫째 자리까지 반올림
  }

  const averageRating = calculateAverageRating();

  return (
    <Grid>
      <Typography variant="h6">
        평균 별점: {averageRating}
      </Typography>
      {reviewList.map((item: CourseReview) => (
        <ReviewCard key={item.courseReviewId} review={item}></ReviewCard>
      ))}
    </Grid>
  )
}

export default Example

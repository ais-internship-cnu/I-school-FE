import { Grid } from "@mui/material"
import useReview from "hooks/useReview"
import { useEffect } from "react"
import 'styles/common.css'
import ReviewCard from "./ReviewCard"

const Example = () => {

  const {onCreateReviewList, reviewList} = useReview()

  const courseNo = 3

  useEffect(() => {
    onCreateReviewList(courseNo)
  }, [])

  return (
    <Grid>
        {reviewList.map((item) => <ReviewCard key={item.course_name} review={item}></ReviewCard>)}
    </Grid>
  )
}

export default Example
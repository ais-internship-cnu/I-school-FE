import { Typography } from "@mui/material"
import Star from "components/common/Star"
import { useReview } from "hooks"
import { useEffect } from "react"
import { calculateAverageRating } from "utill/calculate"

const AverageStar=()=>{
    const { onCreateReviewList, reviewList } = useReview()
    const courseNo = 1

    useEffect(() => {
        onCreateReviewList(courseNo)
    }, [])

    const averageRating = calculateAverageRating(reviewList)

    return(
        <Typography className="average-rate">
            평균 별점: <Star rating={averageRating} size={20} /> {averageRating}
        </Typography>
    )
}

export default AverageStar
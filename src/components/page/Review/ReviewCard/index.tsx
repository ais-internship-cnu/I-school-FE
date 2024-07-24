import { Card, CardContent, Typography } from "@mui/material";
import { Review } from "types/review";

interface ReviewProps {
    review: Review
}

const ReviewCard = ({review}:ReviewProps) => {

    const createRatingStar = (rating:number) => {

        let star:string = ''

        for(let i=0; i<rating; i++){
            star = star + '★'
        }

        return star
    }

    const maskString = (userId:string) => {
        if(userId.length <= 2) {
            return userId; // 문자열의 길이가 2 이하인 경우, 문자열 전체를 반환한다.
        }

        const visiblePart = userId.slice(0,2);
        const maskedPart = "***"

        return visiblePart + maskedPart
    }

    return (
        <Card>
            <CardContent>
                <Typography>
                    {maskString(review.course_name)}
                </Typography>
                <Typography>
                    {createRatingStar(review.review_star)}
                </Typography>
                <Typography>
                    {review.review_content}
                </Typography>
            </CardContent>
        </Card>
    )

}

export default ReviewCard
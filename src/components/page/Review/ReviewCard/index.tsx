import { Card, CardContent, Typography } from "@mui/material";
import { CourseReview } from "types/review";
import 'styles/review.css'

interface ReviewProps {
    review: CourseReview;
    renderStars: (rating: number, size?: number) => JSX.Element[];
}

const ReviewCard = ({ review, renderStars }: ReviewProps) => {
    return (
        <Card className="review-card">
            <CardContent className="review-card-content">
                <Typography>
                    {review.content}
                </Typography>
                <Typography>
                    {renderStars(review.rating, 15)} {/* 작은 크기로 별 이미지 표시 */}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ReviewCard;

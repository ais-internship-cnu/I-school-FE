import { Card, CardContent, Typography } from "@mui/material";
import { CourseReview } from "types/review";

interface ReviewProps {
    review: CourseReview;
    renderStars: (rating: number, size?: number) => JSX.Element[];
}

const ReviewCard = ({ review, renderStars }: ReviewProps) => {
    return (
        <Card>
            <CardContent>
                <Typography>
                    별점: {renderStars(review.rating, 15)} {/* 작은 크기로 별 이미지 표시 */}
                </Typography>
                <Typography>
                    리뷰 내용: {review.content}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ReviewCard;

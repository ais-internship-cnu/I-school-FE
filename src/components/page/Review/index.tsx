import { Grid, Typography, Box } from "@mui/material";
import useReview from "hooks/useReview";
import { useEffect } from "react";
import 'styles/common.css';
import ReviewCard from "./ReviewCard";
import { CourseReview } from "types/review";
import 'styles/review.css'

const Example = () => {
    const { onCreateReviewList, reviewList } = useReview();
    const courseNo = 1;

    useEffect(() => {
        onCreateReviewList(courseNo);
    }, []);

    // 평균 별점 계산 함수
    const calculateAverageRating = (): number => {
        if (reviewList.length === 0) return 0; // 리뷰가 없으면 0 반환
        const totalRating = reviewList.reduce((sum, review: CourseReview) => sum + review.rating, 0);
        return parseFloat((totalRating / reviewList.length).toFixed(1)); // 소수점 첫째 자리까지 반올림
    }

    const averageRating = calculateAverageRating();

    // 별 이미지를 렌더링하는 함수
    const renderStars = (rating: number, size: number = 20) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;
        
        const starStyle = {
            width: `${size}px`,
            height: `${size}px`,
            margin: '0 2px',
        };
        
        return (
            <>
                {Array.from({ length: fullStars }).map((_, index) => (
                    <img key={`full-${index}`} src="img/full-star.png" alt="Star" style={starStyle} />
                ))}
                {halfStar === 1 && (
                    <img key="half" src="img/half-star.png" alt="Half Star" style={starStyle} />
                )}
                {Array.from({ length: emptyStars }).map((_, index) => (
                    <img key={`empty-${index}`} src="img/empty-star.png" alt="Empty Star" style={starStyle} />
                ))}
            </>
        );
    };

    return (
        <Grid>
            <Typography className="average-rate">
                평균 별점: {renderStars(averageRating)} {averageRating}
            </Typography>
            {/* {reviewList.map((item: CourseReview) => (
                <Box key={item.courseReviewId} className="review-card-wrapper">
                    <ReviewCard review={item} renderStars={renderStars} />
                </Box>
            ))} */}
        </Grid>
    );
}

export default Example;

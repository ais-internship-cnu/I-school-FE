import { Grid, Box } from '@mui/material';
import useReview from 'hooks/useReview';
import { useEffect } from 'react';
import 'styles/common.css';
import ReviewCard from './ReviewCard';
import { CourseReview } from 'types/review';
import 'styles/review.css';

interface ReviewProps {
  courseName: string;
  professor: string;
}

const Review = ({ courseName, professor }: ReviewProps) => {
  const { onCreateReviewList, reviewList } = useReview();

  useEffect(() => {
    if (courseName && professor) {
      onCreateReviewList(courseName, professor);
    }
  }, [courseName, professor]);

  return (
    <Grid container style={{ height: 'calc(100vh - 112px)', overflowY: 'auto' }}>
      {reviewList.map((item: CourseReview) => (
        <Box key={item.courseReviewId} className="review-card-wrapper">
          <ReviewCard review={item} />
        </Box>
      ))}
    </Grid>
  );
};

export default Review;

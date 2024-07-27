import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'redux/store';
import {
  createCourseReview,
  createReviewList, // 수정된 액션
  reviewSelector,
} from 'redux/modules/review';
import { ReviewRegister } from 'types/reviewRegister';

const useReview = () => {
  const dispatch = useDispatch<AppDispatch>();

  const employeeState = useSelector(reviewSelector);
  const { reviewList } = employeeState;

  const onCreateReviewList = (courseName: string, professor: string) => {
    dispatch(createReviewList({ courseName, professor }));
  };

  const onCreateReview = ({ food, img }: ReviewRegister) => {
    dispatch(createCourseReview({ food, img }));
    console.log('before dispatch' + food + img);
  };

  return {
    onCreateReviewList,
    reviewList,
    onCreateReview,
  };
};

export default useReview;

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'redux/store'
import {
  createCourseReview,
  createReviewList, // 수정된 액션
  reviewSelector,
} from 'redux/modules/review'
import { postData, ReviewRegisterTest } from 'types/reviewRegister' // ReviewRegister타입 추가

const useReview = () => {
  const dispatch = useDispatch<AppDispatch>();

  const employeeState = useSelector(reviewSelector);
  const { reviewList } = employeeState;

  const onCreateReviewList = (courseName: string, professor: string) => {
    dispatch(createReviewList({ courseName, professor }));
  };

  // 정빈 추가 부분 (onCreateReview 함수) -> redux로 post요청 보내는 얘.
  // 나중에 변수명 설정 바꿔주기
  const onCreateReview = ({food, rating, course_id}:postData ) => {
    dispatch(createCourseReview({food, rating, course_id}))
    // console.log("before dispatch" + food + rating)
  }

  return {
    onCreateReviewList,
    reviewList,
    onCreateReview,
  };
};

export default useReview;

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'redux/store'
import {
  createCourseReview, // 정빈 추가 부분(액션 크리에이터)
  createReviewList, 
  reviewSelector,
} from 'redux/modules/review'
import { postData } from 'types/reviewRegister' // post로 제출되는 타입

const useReview = () => {
  const dispatch = useDispatch<AppDispatch>();

  const employeeState = useSelector(reviewSelector);
  const { reviewList } = employeeState;

  const onCreateReviewList = (courseName: string, professor: string) => {
    dispatch(createReviewList({ courseName, professor }));
  };

  // 정빈 추가 부분 (onCreateReview 함수) -> redux로 post요청 보내는 얘.
  // postData타입의 객체를 매개변수로 받아서 createCourseReview액션을 디스패치
  const onCreateReview = ({content, rating, course_id}:postData ) => {
    dispatch(createCourseReview({content, rating, course_id}))
    // console.log("before dispatch" + food + rating)
  }

  return {
    onCreateReviewList,
    reviewList,
    onCreateReview,
  };
};

export default useReview;

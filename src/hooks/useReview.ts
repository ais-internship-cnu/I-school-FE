import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'redux/store'
import {
  createCourseReview, // 정빈 추가 부분(CoureReview 추가)
  createReviewList,
  reviewSelector,
} from 'redux/modules/review'
import { ReviewRegister, ReviewRegisterTest } from 'types/reviewRegister' // ReviewRegister타입 추가

const useReview = () => {
  const dispatch = useDispatch<AppDispatch>()

  const employeeState = useSelector(reviewSelector)
  const {reviewList } = employeeState

  const onCreateReviewList = (courseNo : number) => {
    dispatch(createReviewList(courseNo))
  }

  // 정빈 추가 부분 (onCreateReview 함수) -> redux로 post요청 보내는 얘.
  // 나중에 변수명 설정 바꿔주기
  const onCreateReview = ({food, rating}:ReviewRegisterTest ) => {
    dispatch(createCourseReview({food, rating}))
    // console.log("before dispatch" + food + img)
  }

  return {
    onCreateReviewList,
    reviewList,
    onCreateReview
  }
}

export default useReview
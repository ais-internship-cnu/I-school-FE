import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'redux/store'
import {
  createReviewList,
  reviewSelector,
} from 'redux/modules/review'

const useReview = () => {
  const dispatch = useDispatch<AppDispatch>()

  const employeeState = useSelector(reviewSelector)
  const {reviewList } = employeeState

  const onCreateReviewList = (courseNo : number) => {
    dispatch(createReviewList(courseNo))
  }

  return {
    onCreateReviewList,
    reviewList,
  }
}

export default useReview

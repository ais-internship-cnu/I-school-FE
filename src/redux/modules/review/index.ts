import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from 'constant/api'
import { RootState } from 'redux/store'
import { ReviewState } from 'types/review'
import { ReviewRegister } from 'types/reviewRegister'
import { api } from 'utill/axios'

export const createReviewList = createAsyncThunk(
  'review/createReviewList',
  async (data:number, { rejectWithValue }) => {
    try {
      const response = await api.get(API.COURSER_REVIEW, {params:data})
      return response.data
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An error has occurred.')
    }
  }
)

export const createCourseReview = createAsyncThunk( // 정빈 추가 부분 API POST요청 보내기
  'registration/createCourseReview',
  async (data: ReviewRegister, { rejectWithValue }
  ) => {
    try {
      const response = await api.post(API.REVIEW_REGISTER, data)
      console.log(response.status)
      // return response.data
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An error has occurred.')
    }
  }
)

// 初期状態を正義
const initialState: ReviewState = {
  reviewList : []
}

// slice生成
export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createReviewList.fulfilled, (state, action) => {
        state.reviewList = action.payload
      })
      .addCase(createReviewList.rejected, (state) => {
        state.reviewList = []
      })
  }
})
// selector定義
export const reviewSelector = (state: RootState) => state.review

export default reviewSlice.reducer

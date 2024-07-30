import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from 'constant/api'
import { RootState } from 'redux/store'
import { ReviewState } from 'types/review'
import { postData } from 'types/reviewRegister'
import { api } from 'utill/axios'
import { AxiosError } from 'axios';

export const createReviewList = createAsyncThunk(
  'review/createReviewList',
  async (data: { courseName: string, professor: string }, { rejectWithValue }) => {
    try {
      const response = await api.get(API.COURSER_REVIEW, { params: { course_name: data.courseName, professor: data.professor } });
      return response.data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An error has occurred.');
    }
  }
)

export const createCourseReview = createAsyncThunk( // 정빈 추가 부분 API POST요청 보내기
  'registration/createCourseReview',
  async (data: postData, { rejectWithValue }
  ) => {
    try {
      const response = await api.post(API.REVIEW_REGISTER, data);
      console.log(response.status);
      alert('등록되었습니다.')
      // return response.data
    } catch (err) { //예외처리
      const error = err as AxiosError
      if (error.response) {
        // 서버가 응답을 반환한 경우
        const { status } = error.response;
        switch (status) {
          case 400:
            alert('중복된 값입니다.');
            break;
          case 401:
            alert('인증에 실패했습니다.');
            break;
          case 403:
            alert('접근 권한이 없습니다.');
            break;
          case 404:
            alert('리소스를 찾을 수 없습니다.');
            break;
          case 500:
            alert('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
            break;
          default:
            alert('알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        }
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        // 요청이 전송되었으나 응답이 없는 경우
        alert('서버로부터 응답이 없습니다. 네트워크 상태를 확인해주세요.');
      } else {
        // 요청 설정 중에 문제가 발생한 경우
        alert('요청을 보내는 중에 오류가 발생했습니다.');
      }
      console.log(error.message);
      return rejectWithValue(error instanceof Error ? error.message : 'An error has occurred.');
    }
  }
)

// 初期状態を正義
const initialState: ReviewState = {
  reviewList: []
}

// slice生成
export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createReviewList.fulfilled, (state, action) => {
        state.reviewList = action.payload;
      })
      .addCase(createReviewList.rejected, (state) => {
        state.reviewList = [];
      })
  }
})

// selector定義
export const reviewSelector = (state: RootState) => state.review;

export default reviewSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'constant/api';
import { RootState } from 'redux/store';
import { Courses, Course } from 'types/courses';
import { api } from 'utill/axios';

// 비동기 thunk 생성
export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API.COURSE_LIST); // API endpoint 수정
      return response.data.data.courses.map((course: any) => ({
        courseName: course.courseName,
        professor: course.professor,
        rating: course.rating,
      }));
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An error has occurred.');
    }
  }
);

// 초기 상태 정의
const initialState: Courses = {
  courseList: [],
};

// slice 생성
export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courseList = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        console.error(action.payload); // 에러 로그
      });
  },
});

// selector 정의
export const selectCourses = (state: RootState) => state.courses.courseList;

export default coursesSlice.reducer;

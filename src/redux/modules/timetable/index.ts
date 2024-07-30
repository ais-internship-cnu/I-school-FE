import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from 'constant/api'
import { RootState } from 'redux/store'
import { TimetableState } from 'types/timetable'
import { api } from 'utill/axios'
import { snakeToCamel } from 'utill/convertType'

export const createTimetableList = createAsyncThunk(
  'timetable/createTimetableList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API.SHOW_TIMETABLE)
      console.log(response.data)
      const convertObject = snakeToCamel(response.data)
      console.log(convertObject)
      return {
        timetableList: convertObject.timetableList || [],
        courseList: convertObject.courseList || []
      }
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An error has occurred.')
    }
  }
)

// 초기 상태 정의
const initialState: TimetableState = {
  timetableList: [],
  courseList: []
}

// slice 생성
export const timetableSlice = createSlice({
  name: 'timetable',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createTimetableList.fulfilled, (state, action) => {
        state.timetableList = action.payload.timetableList
        state.courseList = action.payload.courseList
      })
      .addCase(createTimetableList.rejected, (state) => {
        state.timetableList = []
        state.courseList = []
      })
  }
})

// selector 정의
export const timetableSelector = (state: RootState) => state.timetable

export default timetableSlice.reducer

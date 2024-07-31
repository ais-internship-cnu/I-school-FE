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
      const convertObject = snakeToCamel(response.data)
      return convertObject
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An error has occurred.')
    }
  }
)

// 初期状態を正義
const initialState: TimetableState = {
  timetableList : []
}

// slice生成
export const timetableSlice = createSlice({
  name: 'timetable',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createTimetableList.fulfilled, (state, action) => {
        state.timetableList = action.payload
      })
      .addCase(createTimetableList.rejected, (state) => {
        state.timetableList = []
      })
  }
})
// selector定義
export const timetableSelector = (state: RootState) => state.timetable

export default timetableSlice.reducer

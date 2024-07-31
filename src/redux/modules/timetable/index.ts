import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'constant/api';
import { RootState } from 'redux/store';
import { TimetableState } from 'types/timetable';
import { api } from 'utill/axios';
import { snakeToCamel } from 'utill/convertType';

export const createTimetableList = createAsyncThunk(
  'timetable/createTimetableList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API.SHOW_TIMETABLE);
      const convertObject = snakeToCamel(response.data);
      return convertObject;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An error has occurred.');
    }
  }
);

const initialState: TimetableState = {
  timetableList: []
};

export const timetableSlice = createSlice({
  name: 'timetable',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createTimetableList.fulfilled, (state, action) => {
        state.timetableList = action.payload.data.courses; // data.courses로 설정
      })
      .addCase(createTimetableList.rejected, (state) => {
        state.timetableList = [];
      });
  }
});

export const timetableSelector = (state: RootState) => state.timetable;

export default timetableSlice.reducer;

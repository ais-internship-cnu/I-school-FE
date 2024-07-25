// 모듈로 안 빼고 review와 관련되어있기 때문에, review에 한번에 쓸 수 있음.
import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from 'constant/api'
import { ReviewRegister } from 'types/reviewRegister'
import { api } from 'utill/axios'


// 입력데이터를 타입을 맞춰서
export const createCourseReview = createAsyncThunk(
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
  
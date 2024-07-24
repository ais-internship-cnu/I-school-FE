import axios from 'axios'
import MockAdapter from "axios-mock-adapter"
import { API } from 'constant/api'
import { mockFormData_Review } from 'mocks/reviewMock'
import { mockCourses } from 'mocks/timetableMock'


const ENV = process.env.NODE_ENV

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
})

if (ENV === 'development') {
    const mockAxios = new MockAdapter(api)
    mockAxios.onGet(API.COURSER_REVIEW).reply(200, mockFormData_Review)
    mockAxios.onGet(API.SHOW_TIMETABLE).reply(200, mockCourses)
} 

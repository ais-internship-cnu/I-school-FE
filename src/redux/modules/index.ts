import { combineReducers } from '@reduxjs/toolkit'

import reviewReducer from './review'
import timetableReducer from './timetable'
import courseReducer from './courses'

const rootReducer = combineReducers({
  review: reviewReducer,
  timetable: timetableReducer,
  courses: courseReducer
})

export default rootReducer

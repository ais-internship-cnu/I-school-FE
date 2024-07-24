import { combineReducers } from '@reduxjs/toolkit'

import reviewReducer from './review'
import timetableReducer from './timetable'

const rootReducer = combineReducers({
  review: reviewReducer,
  timetable: timetableReducer
})

export default rootReducer

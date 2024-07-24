import { combineReducers } from '@reduxjs/toolkit'

import practiceReducer from './practice'
import reviewReducer from './review'

const rootReducer = combineReducers({
  practice: practiceReducer,
  review: reviewReducer,
})

export default rootReducer

import { combineReducers } from '@reduxjs/toolkit'

import reviewReducer from './review'

const rootReducer = combineReducers({
  review: reviewReducer,
})

export default rootReducer

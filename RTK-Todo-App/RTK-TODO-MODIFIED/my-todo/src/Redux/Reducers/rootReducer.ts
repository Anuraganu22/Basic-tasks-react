import { combineReducers } from '@reduxjs/toolkit'

import todos from '../../Redux/slices/todoSlice';
import dateFilter from '../../Redux/filter/dateFilter';

const rootReducer = combineReducers({
  todos,
  dateFilter,
  
  
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
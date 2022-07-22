import { combineReducers } from '@reduxjs/toolkit'

import todos from '../Features/todoList/todoSlice';
import visibilityFilter from '../Features/visibilityFilter/visibilityFilterSlice';

const rootReducer = combineReducers({
  todos,
  visibilityFilter
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
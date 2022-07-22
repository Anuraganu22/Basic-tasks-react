import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';
import { AppThunk, AppDispatch } from '../../app/store'
import { Todo } from '../types';
const initialState : Todo[] = [];
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<Todo>) {
            state.push(action.payload);
        },
       
    }
});
export const addTodo = (
    text: string,
    day:string,
): AppThunk => async (dispatch: AppDispatch) => {
    const newTodo : Todo = {
        id: Math.random().toString(36).substr(2, 9), 
        text: text,
        day: moment(day).format('DD MMM YYYY ')
    }
   
    dispatch(todoSlice.actions.addTodo(newTodo))
}

export default todoSlice.reducer;
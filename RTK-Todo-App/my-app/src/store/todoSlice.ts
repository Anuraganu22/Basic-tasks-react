import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';
export interface Todo{

    id:string;
    message:string;
    completed:boolean;
}

const todos=createSlice({
    name:"todos",
    initialState:[] as Todo [],
    reducers:{
        addTodo:(state, action: PayloadAction<string>)=>{
            state.push({
                id: uuid(),
                message: action.payload,
                completed: false
            })
        }
    }
})
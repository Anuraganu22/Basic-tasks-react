import { setUncaughtExceptionCaptureCallback } from "process";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
// import { Todo } from "../store/todoSlice";

const TodoInput:React.FC()=>{
const dispatch:AppDispatch=useDispatch();
const [input,setInput]=useState('')
   return(
<form onSubmit={(ev)=>{
  
    ev.preventDefault();
  dispatch(todos.action.addTodo(input));
  setInput("");
}}>
<input 
    id="todo-input"
    value={input}
    onchange={(event)=>{
        setInput(event?.currentTarget.value)
    }} 
    />
</form>
   )
};
export default TodoInput;

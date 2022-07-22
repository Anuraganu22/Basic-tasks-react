import {  TextField,Button } from '@mui/material'
import React,{FormEvent, FunctionComponent as FC, useState} from 'react'

const TodoList:FC = () => {
    const [todo,setTodo]=useState<string>("")

    const handleSubmit =(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if(!todo) return window.alert("please enter your task")

    }

  return (
    <div>
       <div><h1>TodoList</h1></div>  
     <form onSubmit={handleSubmit}>
         <div>
         <TextField  id="filled-basic" label="Add Todo here " value={todo} onChange={(e)=>setTodo(e.target.value)}/>
         </div>
     <div>
     <Button type='submit' color='primary' variant="contained">Add Todo</Button>
     </div>
       </form>
</div>


   
  )
}
export default TodoList

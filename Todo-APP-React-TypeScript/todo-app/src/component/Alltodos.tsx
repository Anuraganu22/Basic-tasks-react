import React,{FunctionComponent as FC, useState,} from 'react'
import TODOINTER from '../Interfaces/todoInterface'

const Alltodos:FC = () => {
    const [alltodos,setAlltodos]=useState<TODOINTER[]>([
     {
         id:1,
         text:"do coding",
         completed:false 
     },
     {
        id:2,
        text:"do eat",
        completed:true,
    },
    ])
  return (
    <div>
    
    </div>
  )
}

export default Alltodos
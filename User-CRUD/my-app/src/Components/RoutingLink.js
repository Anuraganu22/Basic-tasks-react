

import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
const RoutingLink = () => {
  return (
    <div>
       <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="signup" element={<Signup/>}/>
        <Route path="login" element={<Login/>}>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  )
}

export default RoutingLink
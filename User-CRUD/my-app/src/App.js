import React from 'react';
import './App.css';
import Signup from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Home'
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <div>
      <Router>
        <Routes>
        <Route  path="/" element={ <Home/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/login" element={ <Login/> } />
        </Routes>
      </Router>
      </div>
      
    </div>
  );
}

export default App;

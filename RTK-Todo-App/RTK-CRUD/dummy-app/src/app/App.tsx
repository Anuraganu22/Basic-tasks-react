import React from 'react';
import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';

import './App.css';
import AddTodo from '../Features/todoList/AddTodo';
import TodoList from '../Features/todoList/TodoList';
import Footer from '../Features/visibilityFilter/Footer';

function App() {
  return (
    <div className="App">
     <AddTodo/>
     <TodoList/> 
     <Footer/>
    </div>
  );
}

export default App;

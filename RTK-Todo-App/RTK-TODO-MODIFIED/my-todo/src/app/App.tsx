
import Footer from '../components/Filtratiion/Visibilitymode';
import AddTodo from '../components/todolist/AddTodo';
import TodoList from '../components/todolist/TodoList';
import './App.css';

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

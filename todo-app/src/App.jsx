import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { useState, useEffect } from 'react'; 
function App() {
  
  const [todos, setTodos] = useState([])

  function addTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, completed: false}];
    setTodos(newTodoList);
    saveData(newTodoList);

    
  }

  function completeTodo(index) {
    console.log("Complete Todo", index);
    let newTodoList = [...todos]; 
    let completedTodo = todos[index]; 
    completedTodo.completed = true; 
    newTodoList[index] = completedTodo 

    setTodos(newTodoList);
    saveData(newTodoList);


  }

  function deleteTodo(index) {
    const newTodoList = todos.filter((val, valIndex ) => valIndex !== index);
    setTodos(newTodoList);
    saveData(newTodoList);
  }

  const [selectedTab, setSelectedTab] = useState('Open') 

  useEffect(() => {
    if(!localStorage ||  !localStorage.getItem('todo-app')) { return }
    
    let db = JSON.parse(localStorage.getItem('todo-app'));

    setTodos(db.currTodos);
    
  } , []);

  function saveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ currTodos }) );
  }

  return ( 
    <div>
      <Header todos={ todos }/>
      <Tabs todos= { todos } selectedTab = {selectedTab} setSelectedTab = { setSelectedTab } />
      <TodoList todos = {todos} selectedTab={selectedTab} deleteTodo={ deleteTodo } completeTodo = { completeTodo } />
      <TodoInput addTodo = { addTodo }/>
    </div>
  )
}

export default App

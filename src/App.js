import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Todo from "./components/Todo";
import TodoInput from "./components/TodoInput";

function App() {
  const [todos, setTodos] = useState([]);
  const newTodoHandel = (data) => {
    data = {
      done: false,
      name: data,
    };
    localStorage.setItem("todos", JSON.stringify([data, ...todos]));
    setTodos([data, ...todos]);
  };
  const doneToggle = (index) => {
    console.log(index);
    todos[index] = {
      done: !todos[index].done,
      name: todos[index].name,
    };
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodos([...todos]);
  };
  const deleteHandeler = (index) => {
    var newtodos = todos.filter((v, i) => i !== index);
    localStorage.setItem("todos", JSON.stringify(newtodos));
    setTodos([...newtodos]);
  };
  useEffect(() => {
    var todos = JSON.parse(localStorage.getItem("todos"));
    setTodos(todos ? todos : []);
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <TodoInput newTodoHandel={newTodoHandel} />
        {todos.length > 0 ? (
          todos.map((value, index) => (
            <Todo
              atodo={{ ...value, index }}
              doneToggle={doneToggle}
              deleteHandeler={deleteHandeler}
              key={index}
            />
          ))
        ) : (
          <p className="no_todo_style">Wow! Now I am free😎 </p>
        )}
      </div>
    </>
  );
}

export default App;

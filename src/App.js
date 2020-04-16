import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";

function App() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      completed: false,
      title: "Купить хлеб",
    },
    {
      id: 2,
      completed: false,
      title: "Купить молоко",
    },
    {
      id: 3,
      completed: false,
      title: "Купить масло",
    },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>To Do List</h1>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>No tasks</p> }
        
      </div>
    </Context.Provider>
  );
}

export default App;

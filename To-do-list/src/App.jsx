import { useState, useEffect, useReducer } from "react";
import "./style.css";

import { Form } from "./Form";
import { ListItems } from "./ListItems";
import { tasksReducer } from "./TaskReducer";

function App() {
  // const [todos, setTodos] = useState(() => {
  //   const savedTasks = localStorage.getItem("Items");
  //   const parsedValue = JSON.parse(savedTasks);
  //   return parsedValue || [];
  // });

  // useEffect(() => {
  //   localStorage.setItem("Items", JSON.stringify(todos));
  // }, [todos]);

  const [todos, dispatch] = useReducer(tasksReducer, [])


  return (
    <>
      <section className="list-section">
        <Form dispatch={dispatch} todos={todos} />
        <h1>To Do List</h1>
        <ListItems todos={todos} dispatch={dispatch} />
      </section>
    </>
  );
}

export default App;



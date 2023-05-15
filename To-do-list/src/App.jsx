import { useState, useEffect } from "react";
import "./style.css";

import { Form } from "./Form";
import { ListItems } from "./ListItems";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTasks = localStorage.getItem("Items");
    const parsedValue = JSON.parse(savedTasks);
    return parsedValue || [];
  });

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <section className="list-section">
        <Form setTodos={setTodos} todos={todos} />
        <h1>To Do List</h1>
        <ListItems todos={todos} setTodos={setTodos} />
      </section>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

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
        <div style={{margin:"50px 0", display:"flex", flexDirection:"column", gap: "10px"}}>
        <Link to="/profile" className="links">profile</Link>
        <Link to="/" className="links">Home</Link>
        <Link to="/ToDo" className="links">To Do App</Link>
        </div>
      </section>
    </>
  );
}

export default App;

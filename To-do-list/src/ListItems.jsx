import { useState } from "react";
import { EditInput } from "./EditInput";

export function ListItems({ todos, setTodos }) {
  // const [todo.isShown, settodo.isShown] = useState(false);
  const [newtask, setNewTask] = useState(" ");

  const items = todos.map((todo) => {
    return (
      <li key={todo.id}>
        <label>
          <input
            type="checkbox"
            id="checkbox"
            className="checkbox"
            checked={todo.completed}
            onChange={(e) => {
              toggleToDo(todo.id, e.target.checked);
            }}
          />
        </label>
        {todo.isShown ? null : todo.task}
        <EditInput task={newtask}  onChange={handleChange} isShown={todo.isShown} />
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteToDo(todo.id);
          }}
        >
          Delete
        </button>
        <button
          className="btn btn-danger"
          onClick={(e) => {
            handleEdit(e, todo.task, todo.id);
          }}
        >
          {todo.isShown ? "Save" : "Edit"}
        </button>
      </li>
    );
  });

  function handleEdit(e, task, id) {
    let option = e.target.innerText;

    if (option === "Edit") {
      setIsShown(true, id);
      setNewTask(task);
    } else {
      setTodos((currentTodo) =>
        currentTodo.map((todo) => {
          if (todo.id === id) {
            return { ...todo, task: newtask };
          }
          return todo;
        })
      );
      setIsShown(false, id);
    }
  }

  function setIsShown(truth, id) {
      setTodos((currentTodo) => currentTodo.map(todo => 
        todo.id === id? {...todo, isShown: truth}: {...todo, isShown: false}
      ))
  }

  function handleChange(e) {
    setNewTask(e.target.value);
  }

  function toggleToDo(id, completed) {
    // Good
    setTodos((currentTodo) =>
      currentTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      })
    );
  }

  function deleteToDo(id) {
    let currentTodo = todos.filter(todo => todo.id !== id );
    setTodos(currentTodo);
  }

  return <ul className="list">{todos.length === 0 ? "No Tasks" : items}</ul>;
}

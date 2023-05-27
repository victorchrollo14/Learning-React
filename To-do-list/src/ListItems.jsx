import { useState } from "react";
import { EditInput } from "./EditInput";

export function ListItems({ todos, dispatch }) {
  const [newtask, setNewTask] = useState();

  const items = todos.map((todo) => {
    console.log(todo);
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
        {todo.isShown ? (
          <input
            type="text"
            name="todo-task"
            className="todoinput"
            value={newtask}
            onChange={handleChange}
          />
        ) : null}

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
    console.log(option);

    if (option === "Edit") {
      setIsShown(true, id);
      setNewTask(task);
    } else {
      // setTodos((currentTodo) =>
      //   currentTodo.map((todo) => {
      //     if (todo.id === id) {
      //       return { ...todo, task: newtask };
      //     }
      //     return todo;
      //   })
      // );

      dispatch({
        type: "edit",
        id: id,
        task: newtask,
      });
      setIsShown(false, id);
    }
  }

  function setIsShown(truth, id) {
    // setTodos((currentTodo) => currentTodo.map(todo =>
    //   todo.id === id? {...todo, isShown: truth}: {...todo, isShown: false}
    // ))
    dispatch({
      type: "togglebtn",
      id: id,
      truth: truth,
    });
  }

  function handleChange(e) {
    setNewTask(e.target.value);
  }

  function toggleToDo(id, completed) {
    // Good
    // setTodos((currentTodo) =>
    //   currentTodo.map((todo) => {
    //     if (todo.id === id) {
    //       return { ...todo, completed };
    //     }
    //     return todo;
    //   })
    // );
    dispatch({
      type: "toggle",
      id: id,
      completed: completed,
    });
  }

  function deleteToDo(id) {
    // let currentTodo = todos.filter(todo => todo.id !== id );
    // setTodos(currentTodo);
    dispatch({
      type: "delete",
      id: id,
    });
  }

  return <ul className="list">{todos.length === 0 ? "No Tasks" : items}</ul>;
}

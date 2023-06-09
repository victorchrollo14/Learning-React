import { useState, useCallback } from "react";

export function Form({ todos, setTodos }) {
  const [userInput, setUserInput] = useState(" ");

  function addToDo(e) {
    e.preventDefault();
    let newTodo = [
      ...todos,
      {
        id: crypto.randomUUID(),
        task: userInput,
        completed: false,
        isShown: false,
      },
    ];
    setTodos(newTodo);
  }

  const handleChange = useCallback((e) => {
    setUserInput(e.target.value);
  }, [userInput])

  return (
    <form action="" className="new-item-form" onSubmit={addToDo}>
      <label htmlFor="text">New Input</label>
      <input type="text" value={userInput} onChange={handleChange} />
      <button className="btn ">Add</button>
    </form>
  );
}

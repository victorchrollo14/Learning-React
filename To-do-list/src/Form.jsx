import { useState, useCallback } from "react";

export function Form({ todos, dispatch }) {
  const [userInput, setUserInput] = useState(" ");

  function addToDo(e) {
    e.preventDefault();
  
    dispatch({
        type: "add",
        id: crypto.randomUUID(),
        task: userInput,
        completed: false,
        isShown: false,
    }) 
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

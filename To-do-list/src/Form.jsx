import { useState } from "react"

export function Form({todos, setTodos}) {
    const [userInput, setUserInput] = useState(" ")

    function addToDo(e) {
        e.preventDefault()
        let newTodo = [
            ...todos,
            {id: crypto.randomUUID(), task:userInput, completed:false },
        ]
        setTodos(newTodo)
    }

    function handleChange(e) {
        setUserInput(e.target.value)
    }


    return (
        <form action="" className="new-item-form" onSubmit={addToDo}>
            <label htmlFor="text">New Input</label>
            <input type="text"  value={userInput} onChange={handleChange}/>
            <button className="btn ">Add</button>
        </form>
    )
}
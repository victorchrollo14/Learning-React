import { useState } from "react"

export function Form({todos, setTodos}) {
    const [name, setName] = useState(" ")

    function addToDo(e) {
        e.preventDefault()
        let newTodo = [
            ...todos,
            {id: crypto.randomUUID(), task:name, completed:false },
        ]
        setTodos(newTodo)
    }

    function handleChange(e) {
        setName(e.target.value)
    }


    return (
        <form action="" className="new-item-form" onSubmit={addToDo}>
            <label htmlFor="text">New Input</label>
            <input type="text"  value={name} onChange={handleChange}/>
            <button className="btn ">Add</button>
        </form>
    )
}
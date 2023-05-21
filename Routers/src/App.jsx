import { useState } from 'react'
import { Link } from 'react-router-dom'

function ToDoApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello from App</h1>
        <Link to="/profile" className="links">profile</Link>
            <Link to="/" className="links">Home</Link>
            <Link to="/ToDo" className="links">To Do App</Link>
      </div>
    </>
  )
}

export default ToDoApp

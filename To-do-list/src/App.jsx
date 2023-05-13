import { useState } from 'react'
import "./style.css"

import { Form } from './Form'
import { ListItems } from './ListItems'


function App() {
  const [todos, setTodos] = useState([])

  return (
    <>
      <Form setTodos={setTodos} todos={todos}/>
      <h1>To Do List</h1>
      <ListItems todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App

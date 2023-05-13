export function ListItems({ todos, setTodos }) {

    const items = todos.map((todo) => {
      return (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              id="checkbox"
              checked={todo.completed}
              onChange={(e) => {
                toggleToDo(todo.id, e.target.checked);
              }}
            />
          </label>
          {todo.task}
          <button className="btn btn-danger" onClick={()=> {deleteToDo(todo.id)}}>Delete</button>
          <button className="btn btn-danger">Edit</button>
        </li>
      );
    });

    function toggleToDo(id, completed) {
      let currentTodo = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });

      setTodos(currentTodo);
    }

    function deleteToDo(id) {
      let currentTodo = todos.filter(todo => {
            return todo.id !== id
      })
      setTodos(currentTodo)
    }

    return <ul className="list">{todos.length === 0 ? "No Tasks" : items}</ul>;
}

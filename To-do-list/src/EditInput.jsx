export function EditInput({ task, onChange, isShown, id}) {
    console.log(task)
    if (isShown) {
      return (
        <input
          type="text"
          name="todo-task"
          className="todoinput"
          id=""
          value={task}
          onChange={onChange}
        />
      );
    }
    return null;
  }
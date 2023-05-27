export function EditInput({ task, onChange, isShown, id}) {
    if (isShown) {
      return (
        <input
          type="text"
          name="todo-task"
          className="todoinput"
          id={id}
          value={task}
          onChange={onChange}
        />
      );
    }
    return null;
  }
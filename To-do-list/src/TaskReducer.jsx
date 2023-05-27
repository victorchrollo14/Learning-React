export function tasksReducer(todos, action) {
  switch (action.type) {
    case "add":
      return [
        ...todos,
        {
          id: action.id,
          task: action.task,
          completed: action.completed,
          isShown: action.isShown,
        },
      ];
    case "delete":
      return todos.filter((todo) => todo.id !== action.id);
    case "toggle":
      return todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: action.completed };
        }
      });
    case "edit":
      return todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, task: action.task };
        }
        return todo;
      });
    case "togglebtn":
      return todos.map((todo) =>
        todo.id === action.id
          ? { ...todo, isShown: action.truth }
          : { ...todo, isShown: false }
      );
    default:
      throw Error(`unknown action ${action.type}`);
  }
}

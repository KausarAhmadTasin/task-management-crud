import { ADD_TASK, DELETE_TASK, TOGGLE_COMPLETED } from "../App";

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      return { tasks: [...state.tasks, payload] };
    case DELETE_TASK:
      return { tasks: state.tasks.filter((task) => task.id !== payload) };
    case TOGGLE_COMPLETED:
      const updatedTasks = state.tasks.map((task) =>
        task.id === payload ? { ...task, completed: !task.completed } : task
      );
      return { tasks: updatedTasks };
    default:
      return state;
  }
};

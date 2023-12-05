import { ADD_TASK, DELETE_TASK } from "../App";

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      return { tasks: [...state.tasks, payload] };
    case DELETE_TASK:
      return { tasks: state.tasks.filter((task) => task.id !== payload) };
    default:
      return state;
  }
};

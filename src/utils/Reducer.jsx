import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_COMPLETED,
  IS_EDITABLE,
  EDITING,
} from "../App";

export const reducer = (state, action) => {
  const { type, payload } = action;
  const { taskId, editText } = payload;
  console.log(state);
  switch (type) {
    case ADD_TASK:
      return { tasks: [...state.tasks, payload] };

    case DELETE_TASK:
      return { tasks: state.tasks.filter((task) => task.id !== payload) };

    case EDITING: {
      const updatedTasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, task: editText, editable: false } : task
      );
      return { tasks: updatedTasks };
    }
    case TOGGLE_COMPLETED: {
      const updatedTasks = state.tasks.map((task) =>
        task.id === payload ? { ...task, completed: !task.completed } : task
      );
      return { tasks: updatedTasks };
    }

    case IS_EDITABLE: {
      const editSelect = state.tasks.map((task) =>
        task.id === payload ? { ...task, editable: !task.editable } : task
      );
      return { tasks: editSelect };
    }

    default:
      return state;
  }
};

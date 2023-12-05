import { useReducer } from "react";
import "./App.css";
import Task from "./components/TaskItem";
import { reducer } from "./utils/reducer";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

const initialState = {
  tasks: [],
};

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    if (e.target.taskInput.value === " " || e.target.taskInput.value === "") {
      alert("Task cannot be blank!");
    } else {
      e.preventDefault();
      const taskObj = {
        id: Date.now(),
        task: e.target.taskInput.value,
      };
      dispatch({ type: ADD_TASK, payload: taskObj });
      e.target.taskInput.value = "";
    }
  };

  const deleteTask = (taskId) => {
    dispatch({ type: DELETE_TASK, payload: taskId });
  };

  return (
    <>
      <div className="main-content">
        <AddTaskForm handleSubmit={handleSubmit} />
        <div className="tasks-field">
          <TaskList state={state} deleteTask={deleteTask} />
        </div>
      </div>
    </>
  );
}

export default App;

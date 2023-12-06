import { useEffect, useReducer } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { reducer } from "./utils/Reducer";
import "./App.css";

const initialState = {
  tasks: [],
};

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const IS_EDITABLE = "IS_EDITABLE";
export const EDITING = "EDITION";

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("tasks")) || initialState
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state]);

  const handleSubmit = (e) => {
    if (e.target.taskInput.value === " " || e.target.taskInput.value === "") {
      alert("Task cannot be blank!");
    } else {
      e.preventDefault();
      const taskObj = {
        id: Date.now(),
        task: e.target.taskInput.value,
        completed: false,
        editable: false,
      };
      dispatch({ type: ADD_TASK, payload: taskObj });
      e.target.taskInput.value = "";
    }
  };

  const deleteTask = (taskId) => {
    dispatch({ type: DELETE_TASK, payload: taskId });
  };

  const isComplete = (taskId) => {
    dispatch({ type: TOGGLE_COMPLETED, payload: taskId });
  };

  const isEditable = (taskId) => {
    dispatch({ type: IS_EDITABLE, payload: taskId });
  };

  const saveEdit = (editText, taskId) => {
    dispatch({ type: EDITING, payload: { editText, taskId } });
  };

  return (
    <>
      <div className="main-content">
        <AddTaskForm handleSubmit={handleSubmit} />
        <div className="tasks-field">
          <TaskList
            state={state}
            deleteTask={deleteTask}
            isComplete={isComplete}
            isEditable={isEditable}
            saveEdit={saveEdit}
          />
        </div>
      </div>
    </>
  );
}

export default App;

import { useReducer } from "react";
import "./App.css";
import Task from "./Task";

const initialState = {
  tasks: [],
};

const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";

const reducer = (state, action) => {
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
        <form className="form" action="submit" onSubmit={handleSubmit}>
          <input
            type="text"
            name="taskInput"
            className="input-field"
            placeholder="Task..."
          />
          <input
            type="submit"
            name="submit-btn"
            id="submit-btn"
            value="Add Task"
            className="submit-btn"
          />
        </form>

        <div className="tasks-field">
          {state.tasks.length <= 0
            ? "No task added yet!"
            : state.tasks.map((text) => (
                <ul key={text.id}>
                  <Task todo={text} deleteTask={deleteTask} />
                </ul>
              ))}
        </div>
      </div>
    </>
  );
}

export default App;

import { RiDeleteBack2Fill } from "react-icons/ri";
import { FcCheckmark } from "react-icons/fc";
import { useState } from "react";

const Task = ({ todo, deleteTask }) => {
  const [completed, setCompleted] = useState(false);
  const { id, task } = todo;

  const checkClick = () => {
    setCompleted(!completed);
  };

  return (
    <>
      <li className={completed ? "not-completed" : "completed"}>
        {" "}
        <button onClick={() => checkClick()} className="complete-btn">
          <FcCheckmark />
        </button>
        <div className="single-task">{task}</div>
        <button
          onClick={() => deleteTask(id)}
          className="delete-btn"
          title="Remove Task"
        >
          <RiDeleteBack2Fill />
        </button>
      </li>
    </>
  );
};

export default Task;

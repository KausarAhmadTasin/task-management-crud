import { RiDeleteBack2Fill } from "react-icons/ri";
import { FcCheckmark } from "react-icons/fc";
import { useState } from "react";

const TaskItem = ({ todo, deleteTask, isComplete }) => {
  const { id, task, completed } = todo;
  console.log(todo);
  return (
    <>
      <li className={completed ? "not-completed" : "completed"}>
        {" "}
        <button onClick={() => isComplete(id)} className="complete-btn">
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

export default TaskItem;

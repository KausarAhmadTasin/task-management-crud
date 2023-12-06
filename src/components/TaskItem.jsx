/* eslint-disable react/prop-types */
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FcCheckmark } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";

const TaskItem = ({ todo, deleteTask, isComplete, isEditable, saveEdit }) => {
  const { id, task, completed, editable } = todo;
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = (e) => {
    e.preventDefault();
    setEditedTask(e.target.value);
  };

  return (
    <>
      <li className={completed ? "not-completed" : "completed"}>
        <button onClick={() => isComplete(id)} className="complete-btn">
          <FcCheckmark />
        </button>
        {editable ? (
          <>
            <input
              type="text"
              name="taskInput"
              className="input-field-inside"
              placeholder="Edit..."
              value={editedTask}
              onChange={handleEdit}
              autoFocus
            />
            <button
              className="submit-btn"
              onClick={() => saveEdit(editedTask, id)}
            >
              Save
            </button>
          </>
        ) : (
          <div id="single-task">{task}</div>
        )}
        <button
          title="Edit Task"
          className="edit-btn"
          onClick={() => isEditable(id)}
        >
          <CiEdit />
        </button>
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

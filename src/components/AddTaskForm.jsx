import React from "react";

const AddTaskForm = ({ handleSubmit }) => {
  return (
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
  );
};

export default AddTaskForm;

const AddTaskForm = ({ handleSubmit }) => {
  return (
    <form className="form" action="submit" onSubmit={handleSubmit}>
      <input
        type="text"
        name="taskInput"
        className="input-field"
        placeholder="Add what to do..."
        autoFocus
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

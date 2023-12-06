import TaskItem from "./TaskItem";

const TaskList = ({ state, deleteTask, isComplete, isEditable, saveEdit }) => {
  return state.tasks.length <= 0
    ? "No task added yet!"
    : state.tasks.map((text) => (
        <ul key={text.id}>
          <TaskItem
            todo={text}
            deleteTask={deleteTask}
            isComplete={isComplete}
            isEditable={isEditable}
            saveEdit={saveEdit}
          />
        </ul>
      ));
};

export default TaskList;

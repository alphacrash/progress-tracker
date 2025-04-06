import TaskItem from "./TaskItem";

const Tasks = ({ tasks, updateTasks }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} updateTasks={updateTasks} />
      ))}
    </div>
  );
};

export default Tasks;

import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const Tasks = () => {
  const categorizedTasks = useSelector((state) => state.task.value);

  return (
    <div className="space-y-6">
      {Object.entries(categorizedTasks).map(([category, tasks]) => (
        <div key={category} className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Stage - {category}</h2>
          <div className="space-y-4">
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;

import { useEffect, useState } from "react";
import { fetchTasks } from "../lib";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const updateTasks = async () => {
    const data = await fetchTasks();
    data.sort((a, b) => a.id - b.id);
    setTasks(data);
  };

  useEffect(() => {
    updateTasks();
  }, []);

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Task key={task.id} task={task} updateTasks={updateTasks} />
      ))}
    </div>
  );
};

export default TaskList;

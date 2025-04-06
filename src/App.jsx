import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/tasks/Tasks";
import { fetchTasks } from "./lib/api";
import { categorizeTasks } from "./lib/utils";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const updateTasks = async () => {
    const data = await fetchTasks();
    setTasks(categorizeTasks(data));
  };

  useEffect(() => {
    updateTasks();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container flex flex-col gap-8 mx-auto px-4 py-8">
        <Header categorizedTasks={tasks} updateTasks={updateTasks} />
        <Tasks categorizedTasks={tasks} updateTasks={updateTasks} />
      </div>
    </div>
  );
};

export default App;

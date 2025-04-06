import TaskList from "./components/TaskList";
import { tasks } from "./data";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-3xl font-bold mb-6">Task Progress Tracker</h1>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;

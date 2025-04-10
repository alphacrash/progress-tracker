import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Tasks from "./components/tasks/Tasks";
import { addTask } from "./features/taskSlice";
import { categorizeTasks } from "./lib/utils";

const App = () => {
     const tasks = useSelector((state) => state.task.value);
     const dispatch = useDispatch();

     return (
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
               <div className="container flex flex-col gap-8 mx-auto px-4 py-8">
                    <Header categorizedTasks={categorizeTasks(tasks)} updateTasks={() => {}} />
                    <Tasks categorizedTasks={categorizeTasks(tasks)} updateTasks={() => {}} />
                    <button onClick={() => dispatch(addTask())}>Hello world</button>
               </div>
          </div>
     );
};

export default App;

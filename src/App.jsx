import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Tasks from "./components/tasks/Tasks";
import { fetchTasksThunk } from "./features/taskSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasksThunk());
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container flex flex-col gap-8 mx-auto px-4 py-8">
        <Header />
        <Tasks />
      </div>
    </div>
  );
};

export default App;

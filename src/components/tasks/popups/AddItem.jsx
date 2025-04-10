import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTasksThunk } from "../../../features/taskSlice";
import { createTask } from "../../../lib/api";

const AddItem = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [task, setTask] = useState({
    category: 0,
    title: "",
    value: 0,
    total: 0,
    priority: 0,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: ["title"].includes(name) ? value : parseInt(value, 10),
    }));
  };

  const submitTaskCreation = async () => {
    setIsButtonDisabled(true);
    await createTask(task);
    await dispatch(fetchTasksThunk());
    setIsAdded(true);
  };

  return (
    <div className="flex flex-col gap-4">
      {isAdded ? (
        <>The task is successfully added. You may close the popup.</>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            <div className="max-w-sm">
              <label
                htmlFor="category"
                className="block text-sm font-medium mb-2"
              >
                Category
              </label>
              <input
                type="number"
                id="category"
                name="category"
                placeholder="Category"
                value={task.category}
                onChange={handleChange}
                className="app-input"
              />
            </div>
            <div className="max-w-sm">
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                value={task.title}
                onChange={handleChange}
                className="app-input"
              />
            </div>
            <div className="max-w-sm">
              <label htmlFor="value" className="block text-sm font-medium mb-2">
                Value
              </label>
              <input
                type="number"
                id="value"
                name="value"
                placeholder="Value"
                value={task.value}
                onChange={handleChange}
                className="app-input"
              />
            </div>
            <div className="max-w-sm">
              <label htmlFor="total" className="block text-sm font-medium mb-2">
                Total
              </label>
              <input
                type="number"
                id="total"
                name="total"
                placeholder="Total"
                value={task.total}
                onChange={handleChange}
                className="app-input"
              />
            </div>
            <div className="max-w-sm">
              <label
                htmlFor="priority"
                className="block text-sm font-medium mb-2"
              >
                Priority
              </label>
              <input
                type="number"
                id="priority"
                name="priority"
                placeholder="Priority"
                value={task.priority}
                onChange={handleChange}
                className="app-input"
              />
            </div>
          </div>
          <button
            onClick={submitTaskCreation}
            disabled={isButtonDisabled}
            className={`bg-green-600 text-white px-4 py-2 rounded-md ${
              isButtonDisabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-green-800"
            }`}
          >
            Yes
          </button>
        </>
      )}
    </div>
  );
};

export default AddItem;

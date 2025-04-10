import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTasksThunk } from "../../../features/taskSlice";
import { updateTaskValue } from "../../../lib/api";

const UpdateItem = ({ task }) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    setValue(task.value);
  }, [task]);

  const updateTaskValueChange = async () => {
    setIsButtonDisabled(true);
    await updateTaskValue(task.id, value);
    await dispatch(fetchTasksThunk());
    setIsUpdated(true);
  };

  return (
    <div className="flex flex-col gap-4">
      {isUpdated ? (
        <>The task is successfully updated. You may close the popup.</>
      ) : (
        <>
          <input
            type="number"
            min="0"
            max={task.total}
            value={value}
            placeholder="Enter new value"
            className="app-input"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={updateTaskValueChange}
            disabled={isButtonDisabled}
            className={`bg-blue-400 text-white px-4 py-2 rounded-md ${
              isButtonDisabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-500"
            }`}
          >
            Yes
          </button>
        </>
      )}
    </div>
  );
};

export default UpdateItem;

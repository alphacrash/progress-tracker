import { useState } from "react";
import { deleteTask } from "../../../lib/api";
import { fetchTasksThunk } from "../../../features/taskSlice";
import { useDispatch } from "react-redux";

const DeleteItem = ({ taskId }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const dispatch = useDispatch();

  const updateTaskValueChange = async () => {
    setIsButtonDisabled(true);
    await deleteTask(taskId);
    await dispatch(fetchTasksThunk());
    setIsDeleted(true);
  };

  return (
    <div className="flex flex-col gap-4">
      {isDeleted ? (
        <>The task is successfully deleted. You may close the popup.</>
      ) : (
        <>
          <div>Are you sure you want to delete this?</div>
          <button
            onClick={updateTaskValueChange}
            disabled={isButtonDisabled}
            className={`bg-red-400 text-white px-4 py-2 rounded-md ${
              isButtonDisabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-red-500"
            }`}
          >
            Yes
          </button>
        </>
      )}
    </div>
  );
};

export default DeleteItem;

import { CircleArrowUp, CircleMinus } from "lucide-react";
import Popup from "../Popup";
import Progress from "../Progress";
import DeleteItem from "./popups/DeleteItem";
import UpdateItem from "./popups/UpdateItem";

const TaskItem = ({ task }) => {
  return (
    <div className="p-4 border border-gray-400 rounded-lg mb-4">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between">
          <h3
            className={`text-lg font-semibold text-center ${
              task.value === task.total ? "line-through text-gray-600" : ""
            }`}
          >
            {task.title}
          </h3>
          <div className="flex gap-4">
            <Popup
              title="Update Task"
              buttonLabel={
                <CircleArrowUp
                  size={32}
                  className="text-gray-500 hover:text-amber-500"
                />
              }
              content={<UpdateItem task={task} />}
            />
            <Popup
              title="Delete Task"
              buttonLabel={
                <CircleMinus
                  size={32}
                  className="text-gray-500 hover:text-red-500"
                />
              }
              content={<DeleteItem taskId={task.id} />}
            />
          </div>
        </div>
        <div className="w-full space-y-3">
          <Progress current={task.value} total={task.total} />
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex gap-2">
            <span>Deadline</span>
            <span className="px-3 py-1 rounded-full bg-amber-200 text-gray-700 text-sm">
              {task.deadline}
            </span>
          </div>
          {task.actual_end && (
            <div className="flex gap-2 items-center">
              <span>Actual End</span>
              <span className="px-3 py-1 rounded-full bg-green-200 text-gray-700 text-sm">
                {task.actual_end}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;

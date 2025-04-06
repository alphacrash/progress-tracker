import { CircleArrowUp, CircleMinus } from "lucide-react";
import Popup from "../Popup";
import Progress from "../Progress";
import DeleteItem from "./popups/DeleteItem";
import UpdateItem from "./popups/UpdateItem";

const TaskItem = ({ task, updateTasks }) => {
  return (
    <div className="p-4 border border-gray-400 rounded-lg mb-4">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-center">{task.title}</h3>
          <div className="flex gap-4">
            <Popup
              title="Update Task"
              buttonLabel={
                <CircleArrowUp
                  size={32}
                  className="text-gray-500 hover:text-amber-500"
                />
              }
              content={<UpdateItem task={task} updateTasks={updateTasks} />}
            />
            <Popup
              title="Delete Task"
              buttonLabel={
                <CircleMinus
                  size={32}
                  className="text-gray-500 hover:text-red-500"
                />
              }
              content={
                <DeleteItem taskId={task.id} updateTasks={updateTasks} />
              }
            />
          </div>
        </div>
        <div className="w-full space-y-3">
          <Progress current={task.value} total={task.total} />
        </div>
      </div>
    </div>
  );
};

export default TaskItem;

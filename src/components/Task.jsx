import { useEffect, useState } from "react";
import { updateTaskValue } from "../lib";
import Progress from "./Progress";

const Task = ({ task, updateTasks }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(task.value);
  }, [task]);

  const updateTaskValueChange = async () => {
    await updateTaskValue(task.id, value);
    await updateTasks();
  };

  return (
    <div className="p-4 border border-gray-400 rounded-lg mb-4">
      <div className="flex flex-col items-center space-y-4">
        <div className="group flex w-full justify-between">
          <h3 className="text-lg font-semibold text-center">{task.title}</h3>
          <div className="hidden group-hover:flex gap-2">
            <input
              type="number"
              min="0"
              max={task.total}
              value={value}
              className="rounded text-right appearance-none 
                        [&::-webkit-outer-spin-button]:appearance-none 
                        [&::-webkit-inner-spin-button]:appearance-none 
                        [&::-moz-appearance:textfield]"
              onChange={(e) => setValue(e.target.value)}
            />
            <div
              onClick={updateTaskValueChange}
              className="cursor-pointer border rounded-full border-blue-500 px-2"
            >
              Submit
            </div>
          </div>
        </div>
        <div className="w-full space-y-3">
          <Progress current={task.value} total={task.total} />
        </div>
      </div>
    </div>
  );
};

export default Task;

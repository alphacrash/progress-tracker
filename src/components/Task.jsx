import { useState, useEffect } from "react";
import Progress from "./Progress";

const Task = ({ task }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const savedCurrent = localStorage.getItem(`task-${task.id}-current`);
    if (savedCurrent) setCurrent(parseInt(savedCurrent));
  }, [task.id]);

  const handleCurrentChange = (e) => {
    const value = Math.max(
      0,
      Math.min(parseInt(e.target.value) || 0, task.total)
    );
    setCurrent(value);
    localStorage.setItem(`task-${task.id}-current`, value.toString());
  };

  return (
    <div className="p-4 border rounded-lg mb-4">
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-lg font-semibold text-center">{task.title}</h3>
        <div className="w-full space-y-3">
          <div className="flex justify-center gap-x-2">
            <input
              type="number"
              min="0"
              max={task.total}
              value={current}
              onChange={handleCurrentChange}
              className="w-20 px-2 py-1 border rounded text-center"
              placeholder="Current"
            />
            <span className="text-gray-500">/</span>
            <span className="w-20 px-2 py-1 text-center">{task.total}</span>
          </div>
          <Progress current={current} total={task.total} />
        </div>
      </div>
    </div>
  );
};

export default Task;

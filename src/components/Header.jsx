import { CirclePlus } from "lucide-react";
import Popup from "./Popup";
import AddItem from "./tasks/popups/AddItem";
import Progress from "./Progress";
import { getSumOfValuesAndTotals } from "../lib/utils";

const Header = ({ categorizedTasks, updateTasks }) => {
  const { value, total } = getSumOfValuesAndTotals(categorizedTasks);

  return (
    <div>
      <div className="flex items-end justify-center gap-4">
        <h1 className="text-3xl text-blue-600 font-bold">
          Task Progress Tracker
        </h1>
        <Popup
          title="Add Task"
          buttonLabel={
            <CirclePlus
              size={32}
              className="text-gray-500 hover:text-green-500"
            />
          }
          content={<AddItem updateTasks={updateTasks} />}
        />
      </div>
      <div className="mt-2">
        <Progress current={value} total={total} hide overall />
      </div>
    </div>
  );
};

export default Header;

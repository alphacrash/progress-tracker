import { CirclePlus } from "lucide-react";
import { useSelector } from "react-redux";
import { getSumOfValuesAndTotals } from "../lib/utils";
import Popup from "./Popup";
import Progress from "./Progress";
import AddItem from "./tasks/popups/AddItem";

const Header = () => {
  const tasks = useSelector((state) => state.task.value);
  const { value, total } = getSumOfValuesAndTotals(tasks);

  return (
    <div>
      <div className="flex items-end justify-center gap-4">
        <h1 className="text-3xl text-blue-600 font-bold">
          Progress - Dynamic Programming
        </h1>
        <Popup
          title="Add Task"
          buttonLabel={
            <CirclePlus
              size={32}
              className="text-gray-500 hover:text-green-500"
            />
          }
          content={<AddItem />}
        />
      </div>
      <div className="mt-2">
        <Progress current={value} total={total} hide overall />
      </div>
    </div>
  );
};

export default Header;

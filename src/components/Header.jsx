import { CirclePlus } from "lucide-react";
import Popup from "./Popup";
import AddItem from "./tasks/popups/AddItem";

const Header = ({ updateTasks }) => {
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
    </div>
  );
};

export default Header;

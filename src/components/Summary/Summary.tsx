import { Task } from "../../App";
import SummaryItem from "./SummaryItem";

const Summary = ({ tasks }: { tasks: Task[] }) => {
  const total = tasks.length;
  const pending = tasks.filter((t) => t.done === false).length;
  const done = tasks.filter((t) => t.done === true).length;
  return (
    <>
      <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
        <SummaryItem itemName={"总数"} itemValue={total} />
        <SummaryItem itemName={"待办"} itemValue={pending} />
        <SummaryItem itemName={"已完成"} itemValue={done} />
      </div>
    </>
  );
};

export default Summary;

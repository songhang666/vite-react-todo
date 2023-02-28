import { Task } from "../../App";
import TaskItem from "./TaskItem";

const Tasks = ({
  tasks,
  toggleDone,
  handleDelete,
}: {
  tasks: Task[];
  toggleDone: (id: string, done: boolean) => void;
  handleDelete: (id: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-2">
      {tasks.length ? (
        tasks.map((t) => (
          <TaskItem
            key={t.id}
            name={t.name}
            done={t.done}
            id={t.id}
            toggleDone={toggleDone}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <span className="text-sky-900 font-bold">目前还没有任务</span>
      )}
    </div>
  );
};

export default Tasks;

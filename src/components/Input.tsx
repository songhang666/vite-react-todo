import { FormEvent, useState } from "react";

const InputContainer = ({
  handleSubmit,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>, value: string) => void;
}) => {
  const [newTaskName, setNewTaskName] = useState("");
  return (
    <form
      action=""
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        handleSubmit(e, newTaskName);
        setNewTaskName("");
      }}
    >
      <div className="flex flex-col">
        <label className="text-white">输入你的下一个任务</label>
        <input
          className="p-1 rounded-sm"
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-sky-500/50 rounded-lg hover:bg-cyan-600 p-1"
      >
        添加任务
      </button>
    </form>
  );
};

export default InputContainer;

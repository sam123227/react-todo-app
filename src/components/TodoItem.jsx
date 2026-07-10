import { FaTrash } from "react-icons/fa";
function TodoItem({ task, tasks, setTasks }) {

  function handleDelete() {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);

    setTasks(updatedTasks);
  }

  function handleToggle(){
    const updatedTasks=tasks.map((t)=>(
      t.id===task.id ?{...t,completed: !t.completed}:t
    ));
    setTasks(updatedTasks);
  }

  return (
    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg mb-3 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <input type="checkbox" checked={task.completed} onChange={handleToggle} className="w-5 h-5 cursor-pointer" />

        <p className={task.completed? "line-through text-gray-400":""}>{task.text}</p>
      </div>

      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700"
      ><FaTrash />
      </button>
    </div>
  );
}

export default TodoItem;
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const completed = tasks.filter((task) => task.completed).length;
  const remaining = tasks.length - completed;

  const[filter,setFilter]=useState("all");
  const filteredTasks = tasks.filter((task) => {
  if (filter === "active") return !task.completed;
  if (filter === "completed") return task.completed;
  return true;
});
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl">
        <h1 className="text-2xl font-bold text-center">📝Todo App</h1>

        <p className="text-center text-gray-500 mt-2">
          Start Organizing Your Tasks!
        </p>

        <TodoForm tasks={tasks} setTasks={setTasks} />
        <div className="flex justify-between mt-5 text-gray-600 text-sm">
          <p>Total: {tasks.length}</p>
          <p>Completed: {completed}</p>
          <p>Remaining: {remaining}</p>
        </div>
        <div className="flex gap-2 mt-4">
  <button onClick={() => setFilter("all")} className={`text-white font-semibold transition rounded-lg px-4 py-2 ${filter==="all" ?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>All</button>
   <button onClick={() => setFilter("active")} className={`text-white font-semibold transition rounded-lg px-4 py-2 ${filter==="active" ?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>Active</button>
    <button onClick={() => setFilter("completed")} className={`text-white font-semibold transition rounded-lg px-4 py-2 ${filter==="completed" ?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>Completed</button>
</div>
        <TodoList tasks={filteredTasks} filter={filter} allTasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;

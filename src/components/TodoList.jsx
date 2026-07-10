import TodoItem from "./TodoItem";
function TodoList({ tasks, allTasks, filter, setTasks }) {
  if (tasks.length === 0) {
    let message = "";

    if (filter === "all") {
      message = "📝 No tasks yet. Add your first task!";
    } else if (filter === "active") {
      message = "🎉 No active tasks. Great job!";
    } else {
      message = "✅ No completed tasks yet.";
    }

    return (
      <div className="mt-6">
        <p className="text-center text-gray-500">{message}</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          tasks={allTasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
}

export default TodoList;
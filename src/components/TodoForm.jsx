import { useState } from "react";
function TodoForm({tasks,setTasks}){
    const[task,setTask]=useState("");
    function handleAdd(){
        if(task.trim()==="")return;
        const newTask={
            id:Date.now(),
            text:task,
            completed:false
        };
        setTasks([...tasks,newTask]);
        setTask("");
    }
    return(
        <div className="flex gap-3 mt-6">
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Enter your task here..." className="flex-1 border rounded-lg  px-4 py-2" 
             onKeyDown={(e)=>{
                if(e.key==="Enter")
                    handleAdd();
            }}/>
            <button onClick={handleAdd} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">Add</button>
        </div>
     
    );
}

export default TodoForm;
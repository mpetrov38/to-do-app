import React from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./AddTask/Task.js/Task";

function Tasks(){
  return (
    <div className="Tasks">
      <AddTask/>
      <Task/>
    </div>
  )
}

export default Tasks;
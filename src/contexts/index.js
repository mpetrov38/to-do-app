import React, { createContext, useState } from "react";
import { useTodos, useTasks } from "../hooks";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const defaultTask = "Today";
  let [selectedTask, setSelectedTask] = useState(defaultTask);

  let todos = useTodos();
  let tasks = useTasks(todos);
  return (
    <TodoContext.Provider
      value={{
        selectedTask,
        setSelectedTask,
        todos,
        tasks
      }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
import React, { useContext } from "react";
import Todo from "../Todos/Todo/Todo"
import NextSevenDays from "../NextSevenDays/NextSevenDays"
import { TodoContext } from "../../contexts";

function Todos() {
  let {todos,selectedTask} = useContext(TodoContext);


  return (
    <div className="Todos">
      <div className="selectedTask">
        {selectedTask}
      </div>
      <div className="todos">
        {
          selectedTask === "next 7 days" ?
            <NextSevenDays todos={todos} />
            :
            todos.map(todo =>
              <Todo todo={todo} key={todo.id} />
            )
        }
      </div>
    </div>
  )
}

export default Todos;
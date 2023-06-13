import React from "react";
import Todo from "../Todos/Todo/Todo"
import NextSevenDays from "../NextSevenDays/NextSevenDays"

function Todos() {
  let selectedTask = "Today";

  const todos = [
    {
      id: 'd54sd4',
      text: "Go for a run",
      time: "10:00 AM",
      date: "06/03/2021",
      day: "6",
      checked: true,
      color: 'green',
      taskType: 'personal'
    },
    {
      id: 'd54fdf',
      text: "Meeting",
      time: "09:00 AM",
      date: "08/03/2021",
      day: "1",
      checked: false,
      color: 'red',
      taskType: 'work'
    }
  ]

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
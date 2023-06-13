import React, { useState } from "react";
import TodoForm from "../Todos/TodoForm/TodoForm";
import dayjs from "dayjs";

function EditTodo() {
  let [text, setText] = useState("");
  let [day, setDay] = useState(dayjs());
  let [time, setTime] = useState(dayjs());
  let [taskTodo,setTaskTodo] = useState();

  const tasks = [
    { id: 1, name: "personal", numOfTodos: 0 },
    { id: 2, name: "work", numOfTodos: 1 },
    { id: 3, name: "other", numOfTodos: 2 },
  ];

  function handleSubmit(e) {

  }
  return (
    <div className="EditTodo">
      <div className="header">
        Edit todo
      </div>
      <div className="container">
        <TodoForm
          handleSubmit={handleSubmit}
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
          taskTodo={taskTodo}
          setTaskTodo={setTaskTodo}
          time={time}
          setTime={setTime}
          tasks={tasks}
        />
      </div>
    </div>
  )
}

export default EditTodo;
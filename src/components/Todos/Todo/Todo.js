import React, { useState } from "react";
import { ArrowClockwise, CheckSquareFill, Square, Trash } from "react-bootstrap-icons";

function Todo({ todo }) {
  let [hover, setHover] = useState(false);


  return (
    <div className="Todo">
      <div className="todoContainer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <div className="checkTodo">
          {
            todo.checked ?
              <span className="checked">
                <CheckSquareFill color="#bebebe"></CheckSquareFill>
              </span>
              :
              <span className="unchecked">
                <Square color={todo.color}></Square>
              </span>
          }
        </div>
        <div className="text">
          <p style={{ color: todo.checked ? "#bebebe" : 'black' }}>{todo.text}</p>
          <span>{todo.time} - {todo.taskType}</span>
          <div className={`cherta ${todo.checked ? "zacherkni" : ""}`}></div>
        </div>
        <div className="addToNextDay">
          {
            todo.checked &&
            <span>
              <ArrowClockwise />
            </span>
          }
        </div>
        <div className="deleteTodo">
          {
            (hover || todo.checked) &&
            <span>
              <Trash />
            </span>
          }
        </div>
      </div>
    </div>
  )
}

export default Todo;
import React, { useContext, useState } from "react";
import { CaretUp, ListTask, PencilFill } from 'react-bootstrap-icons';
import Task from "./Task/Task";
import AddTask from "./AddTask/AddTask"
import { TodoContext } from "../../contexts";

function Tasks() {
  let [showMenu, setShowMenu] = useState(true);
  let [edit, setEdit] = useState(false);
  let penColor = edit ? "green" : "black";
  
  let {tasks} = useContext(TodoContext);

  return (
    <div className='Tasks'>
      <div className="header">
        <div className="title">
          <ListTask size="18" />
          <p>Tasks</p>
        </div>
        <div className="btns">
          {
            showMenu && tasks.length > 0 &&
            <span className='edit' onClick={() => setEdit(edit => !edit)}>
              <PencilFill size="15" color={penColor} />
            </span>
          }
          <AddTask />
          <span className='arrow'>
            <CaretUp size="20" />
          </span>
        </div>
      </div>
      <div className="items">
        {
          tasks.map(task =>
            <Task
              task={task}
              key={task.id}
              edit={edit}
            />
          )
        }
      </div>
    </div>
  )

}

export default Tasks;
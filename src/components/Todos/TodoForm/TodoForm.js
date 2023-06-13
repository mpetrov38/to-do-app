import React, { useState } from "react";
import dayjs from "dayjs";
import { Bell, ListTask, X } from 'react-bootstrap-icons';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function TodoForm({ handleSubmit,
  heading = false,
  text,
  setText,
  day,
  setDay,
  time,
  setTime,
  tasks,
  taskTodo,
  setTaskTodo,
  showButtons = false,
  setShowModal = false
}) {


  return (

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={handleSubmit} className="TodoForm">
        <div className="text">
          {
            heading &&
            <h3>{heading}</h3>
          }
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="To do" autoFocus />
        </div>
        <div className="remind"><Bell /> Remind me!</div>
        <div className="pickDay">
          <div className="title">
          </div>
          <DatePicker
            label="Date"
            value={day}
            onChange={(newValue) => {
              setDay(newValue);
            }}
            renderInput={(params) => <input {...params} />}
          />
        </div>
        <div className="pickTime">
          <div className="title">
          </div>
          <TimePicker
            label="Time"
            value={time}
            onChange={(newValue) => {
              setTime(newValue);
            }}
            renderInput={(params) => <input {...params} />}
          />
        </div>
        <div className="pickTask">
          <div className="title">
            <ListTask />
            <p>Choose a Task Category</p>
          </div>
          <div className="tasks">
            {
              tasks.length > 0 ?
              tasks.map(task =>
                <div
                  className={`task ${taskTodo === task.name ? "active" : ""}`}
                  key={task.id}
                  onClick={() => setTaskTodo(task.name)}>
                  {task.name}
                </div>
              )
              :
              <div style={{color:"red"}}>
                You have no task categories...
              </div>
            }
          </div>
        </div>
        {
          showButtons &&
          <div>
            <div className="close" onClick={() => setShowModal(false)}>
              <X size='40' />
            </div>
            <div className="confirm">
              <button>Add to do!</button>
            </div>
          </div>
        }
      </form>
    </LocalizationProvider>

  )
}

export default TodoForm;

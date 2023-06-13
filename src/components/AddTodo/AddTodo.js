import React, { useState } from "react";
import dayjs from "dayjs";
import Modal from "../Modal/Modal";
import { Bell, ListTask, X } from 'react-bootstrap-icons';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import  TextField from "@mui/material/TextField";

function AddTodo() {
  let [showModal, setShowModal] = useState(false);
  let [text, setText] = useState("");
  let [day, setDay] = useState(dayjs());
  let [time, setTime] = useState(dayjs());

  return (
    <div className="AddTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>
          Add Todo
        </button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <form>
            <div className="text">
              <h3>Add Todo</h3>
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
                <ListTask/>
                <p>Choose a Task Category</p>
              </div>
              <div className="tasks">
                <div className="task">
                  exercise
                </div>
                <div className="task">
                  shop
                </div>
                <div className="task">
                  appointment
                </div>
                <div className="task">
                  other
                </div>
              </div>
            </div>
            <div className="close" onClick={() => setShowModal(false)}>
              <X size='40'/>
            </div>
            <div className="confirm">
              <button>Add to do!</button>
            </div>
          </form>
        </LocalizationProvider>
      </Modal>
    </div>
  )
}

export default AddTodo;

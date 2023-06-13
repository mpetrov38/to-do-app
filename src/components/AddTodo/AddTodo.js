import React, { useState, useContext, useEffect } from "react";
import dayjs from "dayjs";
import Modal from "../Modal/Modal";
import { Bell, ListTask, X } from 'react-bootstrap-icons';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from "@mui/material/TextField";
import TodoForm from "../Todos/TodoForm/TodoForm";
import { TodoContext } from "../../contexts";

function AddTodo() {
  let { selectedTask } = useContext(TodoContext);
  let [showModal, setShowModal] = useState(false);
  let [text, setText] = useState("");
  let [day, setDay] = useState(dayjs());
  let [time, setTime] = useState(dayjs());
  let [taskTodo, setTaskTodo] = useState(selectedTask);

  const tasks = [
    
  ];

  function handleSubmit(e) {

  }
  useEffect(() => {
    setTaskTodo(selectedTask);
  },[selectedTask]);

  return (
    <div className="AddTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>
          Add Todo
        </button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <TodoForm
          handleSubmit={handleSubmit}
          heading="Add new to do!"
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
          time={time}
          setTime={setTime}
          tasks={tasks}
          taskTodo={taskTodo}
          setTaskTodo={setTaskTodo}
          showButtons={true}
          setShowModal={setShowModal}
        ></TodoForm>
      </Modal>
    </div>
  )
}

export default AddTodo;

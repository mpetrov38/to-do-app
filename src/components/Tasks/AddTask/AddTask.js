import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import { Plus } from "react-bootstrap-icons"
import TaskForm from "../TaskForm/TaskForm";

function AddTask() {
  let [showModal, setShowModal] = useState(false);
  let [taskName, setTaskName] = useState('');
  function handleSubmit(e) {

  }
  return (
    <div className="AddTask">
      <div className="add-button">
        <span onClick={() => setShowModal(true)}>
          <Plus size="20"></Plus>
        </span>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <TaskForm
          handleSubmit={handleSubmit}
          heading="New Task"
          value={taskName}
          setValue={setTaskName}
          setShowModal={setShowModal}
          confirmButtonText="Add Task"
        ></TaskForm>
      </Modal>
    </div>
  )
}

export default AddTask;
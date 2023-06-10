import React, { useState } from "react";
import Modal from "../Modal/Modal";

function AddTodo() {
  let [showModal, setShowModal] = useState(false);

  return (
    <div className="AddTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>
          Add Todo
        </button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div>
          <button onClick={() => setShowModal(false)}>Hide me</button>
          dadas
        </div>
      </Modal>
    </div>
  )
}

export default AddTodo;
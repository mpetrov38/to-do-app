import React, { useState } from "react";
import { XCircle, Pencil } from "react-bootstrap-icons";
import Modal from "../../Modal/Modal"
import RenameTask from "../RenameTask/RenameTask";

function Task({ task, edit }) {
    let [showModal, setShowModal] = useState(false);

    return (
        <div className='Task'>
            <div className="name">
                {task.name}
            </div>
            <div className="btns">
                {
                    edit ?
                        <div className="edit-delete">
                            <span
                                className="edit"
                                onClick={() => setShowModal(true)}
                            >
                                <Pencil size="13" />
                            </span>
                            <span className="delete">
                                <XCircle size="13" />
                            </span>
                        </div>
                        :
                        task.numOfTodos === 0 ?
                            ""
                            :
                            <div className="total-todos">
                                {task.numOfTodos}
                            </div>
                }
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <RenameTask task={task} setShowModal={setShowModal} />
            </Modal>
        </div>
    )
}

export default Task;
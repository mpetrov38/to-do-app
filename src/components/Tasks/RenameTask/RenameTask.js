import React, {useState} from 'react'
import TaskForm from '../TaskForm/TaskForm'

function RenameTask({task, setShowModal}){
    const [newTaskName, setNewTaskName] = useState(task.name)

    function handleSubmit(e){

    }

    return (
        <div className='RenameTask'>
            <TaskForm
                handleSubmit={handleSubmit}
                heading='Edit Task name!'
                value={newTaskName}
                setValue={setNewTaskName}
                setShowModal={setShowModal}
                confirmButtonText='Confirm'
            />
        </div>
    )
}

export default RenameTask;
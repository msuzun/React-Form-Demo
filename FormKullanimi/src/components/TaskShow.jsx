import { useState } from "react";
import TaskCreate from "./TaskCreate";
function TaskShow({ task, onDelete, onUpdate }) {
    const [showEdit, setShowEdit] = useState(false)
    const handleDelete = (event) => {
        event.preventDefault();
        onDelete(task.id)
    }
    const handleEditClick = (event) => {
        event.preventDefault();
        setShowEdit(!showEdit)
    }
    const handleSubmit = (id,updatedTitle,updatedTaskDesc) => {
        setShowEdit(false)
        onUpdate(id,updatedTitle,updatedTaskDesc)
    }
    return (
        <div className="task-show">
            {showEdit ? 
                <div>
                    <TaskCreate task={task} taskFormUpdate={true} OnUpdate={handleSubmit}/>
                </div>
            :
                <div>
                    <h3 className="task-title">Göreviniz</h3>
                    <p>{task.title}</p>
                    <h3 className="task-title">Yapılacaklar</h3>
                    <p>{task.taskDesc}</p>
                    <div>
                        <button className="task-delete" onClick={handleDelete}>Sil</button>
                        <button className="task-edit" onClick={handleEditClick}>Güncelle</button>
                    </div>
                </div>
            }

        </div>
    );
}

export default TaskShow;
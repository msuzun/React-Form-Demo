import { useState,useContext } from "react";
import TasksContext from "../context/task";
function TaskCreate({ task, taskFormUpdate,OnUpdate}) {
    const {editTaskById,createTask} = useContext(TasksContext)
    const [title, setTitle] = useState(task ? task.title : '')
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '')
    const handleCTitlehange = (event) =>{
        setTitle(event.target.value)
    }
    const handleTaskChange = (event) =>{
        setTaskDesc(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        if (taskFormUpdate) {
            OnUpdate(task.id,title,taskDesc)
            editTaskById(task.id,title,taskDesc)
        }
        else{
            //onCreate(title,taskDesc);
            createTask(title,taskDesc)
        }  
        setTitle('');
        setTaskDesc('');
    }
    return ( 
        <div>
            {taskFormUpdate ? 
            <div className="task-update">
                <h3>Lütfen Taskı Düzenleyiniz!!!</h3>
                <form className="task-form">
                    <label className="task-label">Başlığ Düzenleyiniz</label>
                    <input className="task-input" value={title} onChange={handleCTitlehange}/>
                    <label className="task-label">Taskı Düzenleyiniz!</label>
                    <textarea className="task-input" rows={5} value={taskDesc} onChange={handleTaskChange}/>
                    <button className="task-button update-button" onClick={handleSubmit}>Düzenle</button>
                </form>
            </div>
            :
            <div className="task-create">
                <h3>Lütfen Task Ekleyiniz!!!</h3>
                <form className="task-form">
                    <label className="task-label">Başlık</label>
                    <input className="task-input" value={title} onChange={handleCTitlehange}/>
                    <label className="task-label">Task Giriniz!</label>
                    <textarea className="task-input" rows={5} value={taskDesc} onChange={handleTaskChange}/>
                    <button className="task-button" onClick={handleSubmit}>Oluştur</button>
                </form>
            </div>
            }
        </div>
       
     );
}

export default TaskCreate;
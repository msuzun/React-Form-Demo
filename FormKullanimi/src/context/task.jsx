import { createContext,useState } from "react";
import axios from 'axios'
const TasksContext = createContext();

function Provider({children}) {
    const [tasks, setTasks] = useState([])
    const createTask = async (title,taskDesc) =>{
      const response = await axios.post('http://localhost:3000/task',{
        title,
        taskDesc
      });
      const newTask = response.data;
      const createdTasks = [
        ...tasks,
        newTask
      ];
      console.log(createdTasks)
      setTasks(createdTasks)
    }
    const deleteTaskById = async (id) =>{
      await axios.delete(`http://localhost:3000/task/${id}`)
      const afterDeletingTasks = tasks.filter((task)=>{
        return task.id != id;
      })
      setTasks(afterDeletingTasks)
    }
    const editTaskById = async (id,updatedTitle,updatedTaskDesc) =>{
      await axios.put(`http://localhost:3000/task/${id}`,{
        title:updatedTitle,
        taskDesc:updatedTaskDesc
      })
      const afterUpdatedTasks = tasks.map((task)=>{
       if (task.id ===id) {
         return {id,title:updatedTitle,taskDesc:updatedTaskDesc}
       }
       return task;
      })
      setTasks(afterUpdatedTasks)
    }
    const fetchData = async () => {
      const response =  await axios.get('http://localhost:3000/task')
      setTasks(response.data)
    }
    const sharedValuesAndMethod={
        tasks,
        createTask,
        fetchData,
        editTaskById,
        deleteTaskById
    }
    return(
        <TasksContext.Provider value={sharedValuesAndMethod}>
            {children}
        </TasksContext.Provider>
    )
}
export {Provider}
export default TasksContext;
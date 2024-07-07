import { useState,useEffect } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import axios from 'axios'

function App(onUpdate) {
  const [tasks, setTasks] = useState([])
  const createTask = async (title,taskDesc) =>{
    const response = await axios.post('http://localhost:3000/task',{
      title,
      taskDesc
    });
    console.log(response);
    const createdTasks = [
      ...tasks,
      response
    ];
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
  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <div className='App'>
      <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate = {editTaskById}/>
    </div>
  )
}

export default App

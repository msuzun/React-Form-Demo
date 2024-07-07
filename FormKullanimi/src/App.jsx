import { useState,useEffect,useContext } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import axios from 'axios'
import TasksContext from './context/task'

function App() {
  const {fetchData} = useContext(TasksContext)
  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <div className='App'>
      <TaskCreate/>
      <h1>Görevler</h1>
      <TaskList/>
    </div>
  )
}

export default App

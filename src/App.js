import { useState } from 'react';
import './App.css';
import TaskCard from './components/TaskCard';
import InputText from './UI/Input/InputText';
import Button from './UI/button/Button';
import TaskList from './components/TaskList';

function App() {

  const [tasks, setTasks] = useState([])
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const addTask = () => {
    let newTask = {id: Date.now, title: newTaskTitle, isCompleted: false}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task != taskToDelete))
  }

  return (
    <div className="App">
      <div className='container'>
        <div style={{display: 'flex', width: '100%'}}>
          <InputText 
            placeholder='Type in your task' 
            value={newTaskTitle}
            onChange={e => setNewTaskTitle(e.target.value)}
          />
          <Button onClick={addTask}>+</Button>
        </div>
        <TaskList tasks={tasks} deleteTask={deleteTask}/>
      </div>
    </div>
  );
}

export default App;
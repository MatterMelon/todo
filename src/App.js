import { useState } from "react";
import "./App.css";
import InputText from "./components/Input/InputText";
import Button from "./components/button/Button";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTaskTitle) => {
    let newTask = { id: Date.now(), title: newTaskTitle, isCompleted: false };
    setTasks([newTask, ...tasks]);
  };

  const togleTaskStatus = (taskId) => {
    let tasksForUpdate = tasks;
    tasksForUpdate.forEach((task, i) => {
      if (task.id === taskId) {
        tasksForUpdate[i].isCompleted = !tasksForUpdate[i].isCompleted;
        setTasks([...tasksForUpdate]);
      }
    });
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <div className="container">
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          togleTaskStatus={togleTaskStatus}
        />
      </div>
    </div>
  );
}

export default App;

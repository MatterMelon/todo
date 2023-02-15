import { useState, useEffect } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { Oval } from "react-loader-spinner";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => setTasks(data))
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
        {isLoading && (
          <Oval
            height={80}
            width={80}
            color="#48abe0"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#48abe0"
            strokeWidth={3}
            strokeWidthSecondary={2}
          />
        )}
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          togleTaskStatus={togleTaskStatus}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default App;

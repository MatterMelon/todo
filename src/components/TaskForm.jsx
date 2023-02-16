import InputText from "./Input/InputText";
import Button from "./button/Button";
import { useState } from "react";
import style from "./TaskForm.module.css";

const TaskForm = ({ addTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  return (
    <div className={style.taskForm}>
      <InputText
        placeholder="Type in your task"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <Button
        onClick={() => {
          addTask(newTaskTitle);
          setNewTaskTitle("");
        }}
      >
        +
      </Button>
    </div>
  );
};

export default TaskForm;

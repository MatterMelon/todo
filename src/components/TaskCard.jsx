import style from "./TaskCard.module.css";
import { cx } from "classix";

const TaskCard = ({ task, deleteTask, togleTaskStatus }) => {
  return (
    <div
      className={cx(style.taskCard, task.isCompleted && style.taskCompleted)}
      onClick={() => {
        togleTaskStatus(task.id);
      }}
    >
      <h3 className={style.taskCardTitle}>{task.title}</h3>
      <button
        className={style.deleteButton}
        onClick={() => deleteTask(task.id)}
      >
        +
      </button>
    </div>
  );
};

export default TaskCard;

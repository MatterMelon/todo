import { CSSTransition, TransitionGroup } from "react-transition-group";
import TaskCard from "./TaskCard";
import style from "./TaskList.module.css";

const TaskList = ({ tasks, deleteTask, togleTaskStatus }) => {
  return (
    <TransitionGroup className={style.taskList}>
      {tasks.map((task) => (
        <CSSTransition id={task.id} timeout={5000} classNames="task">
          <TaskCard
            className="task"
            task={task}
            deleteTask={deleteTask}
            togleTaskStatus={togleTaskStatus}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TaskList;

import { useState } from 'react'
import { Transition } from 'react-transition-group';
import style from './TaskCard.module.css'


const TaskCard = ({task, deleteTask}) => {

    const [isCompleted, setIsCompleted] = useState(task.isCompleted)

    return (
        <label for={task.id} className={style.taskCard + " " + (isCompleted ? style.taskCompleted : style.taskNotCompleted)}>
            <input 
                onChange={() => setIsCompleted(!isCompleted)} 
                type="checkbox" 
                name="" 
                id={task.id} 
                className={style.taskCardCheckbox}
            />
            <h3 className={style.taskCardTitle}>{task.title}</h3>
            <button className={style.deleteButton} onClick={() => deleteTask(task)}>+</button>
        </label>
    )
}

export default TaskCard
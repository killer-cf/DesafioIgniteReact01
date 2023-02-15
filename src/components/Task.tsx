import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface Task {
  id: string,
  text: string,
  isCompleted: boolean,
}

interface TaskProps {
  task: Task,
  onDeleteTask: (taskIdToDelete: string) => void,
  onChangeTaskComplete: (taskIdToChange: string) => void,
}

export function Task({ task, onDeleteTask, onChangeTaskComplete }: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleTaskComplete() {
    onChangeTaskComplete(task.id);
  }

  return (
    <div className={styles.task}>
      <div>
        <input 
          checked={task.isCompleted}
          onChange={handleTaskComplete}
          type="checkbox" 
          id={task.id}
        />
        <label htmlFor={task.id} />
        <p>{task.text}</p>
      </div>
      <button onClick={handleDeleteTask} >
        <Trash />
      </button>
    </div>
  );
}
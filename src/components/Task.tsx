import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface Task {
  id: string,
  text: string
}

interface TaskProps {
  task: Task,
}

export function Task({ task }: TaskProps) {
  return (
    <div className={styles.task}>
      <div>
        <input 
          type="checkbox" 
          id={task.id}
        />
        <label htmlFor={task.id} />
        <p>{task.text}</p>
      </div>
      <button>
        <Trash />
      </button>
    </div>
  );
}
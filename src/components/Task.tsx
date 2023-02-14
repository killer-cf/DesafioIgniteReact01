import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
  task: string;
}

export function Task({ task }: TaskProps) {
  return (
    <div className={styles.task}>
      <div>
        <input 
          type="checkbox" 
          id= 'checkboxId'
        />
        <label htmlFor='checkboxId' />
        <p>{task}</p>
      </div>
      <button>
        <Trash />
      </button>
    </div>
  );
}
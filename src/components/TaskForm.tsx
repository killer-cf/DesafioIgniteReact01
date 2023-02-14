import { PlusCircle } from 'phosphor-react';
import styles from './TaskForm.module.css';

export function TaskForm() {
  return (
    <form className={styles.form}>
      <input 
        type='text'
        placeholder='Adicione uma nova tarefa' 
      />
      
      <button type='submit'>
        Criar
        <PlusCircle size={24} weight="bold" />
      </button>
    </form>
  )
}
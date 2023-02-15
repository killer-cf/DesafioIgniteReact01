import styles from './TasksList.module.css';
import clipboard from '../assets/clipboard.svg';
import { Task } from './Task';
import { ChangeEvent, FormEvent, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { PlusCircle } from 'phosphor-react';

export function TasksList() {
  const [toDoList, setTodoList] = useState<{}[]>([])
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function onSubmitForm(event: FormEvent){
    event.preventDefault();
    setTodoList([
      ...toDoList,
      {
        id: uuidv4(),
        text: inputValue,
        isCompleted: false
      }
    ])
  }

  return (
    <>
      <form onSubmit={onSubmitForm} className={styles.form} >
        <input 
          type='text'
          placeholder='Adicione uma nova tarefa'
          onChange={handleInputChange}
          value={inputValue} 
        />
        
        <button type='submit'>
          Criar
          <PlusCircle size={24} weight="bold" />
        </button>
      </form>

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.info_tasks_created}>
            <strong>Tarefas cridadas</strong>
            <span>0</span>
          </div>
          <div className={styles.info_tasks_done}>
            <strong>Concluídas</strong>
            <span>0</span>
          </div>
        </header>

        <main className={styles.container_list}>
          {toDoList.length > 0 ? (
            toDoList.map((task) => {
              return <div key={task.id}><Task task={task} /></div>
            })
          ) : (
          <div className={styles.notasks}>
            <img src={clipboard} alt="clipboard" />
            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
          )}
        </main>
      </div>
    </>
  )
}
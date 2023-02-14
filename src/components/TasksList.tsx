import styles from './TasksList.module.css';
import clipboard from '../assets/clipboard.svg';
import { Task } from './Task';

export function TasksList() {
  const tasks = [
    {task: 'lklkldks dsds'},
  ]

  return (
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
        {tasks ? (
          tasks.map((task) => (
            <Task task={task.task} />
          ))
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
  )
}
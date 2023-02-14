import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { TasksList } from "./components/TasksList";

import './global.css'

export function App() {

  return (
    <>
      <Header />
      <div className="content">
        <TaskForm />
        <TasksList />
      </div>   
    </>
  )
}

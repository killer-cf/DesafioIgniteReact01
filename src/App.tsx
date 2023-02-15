import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList";

import './global.css'

export function App() {

  return (
    <>
      <Header />
      <div className="content">
        <TasksList />
      </div>   
    </>
  )
}

import { useState } from "react";
import "./styles/add-todo.css";
import "./styles/todos.css";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  
  return (
    <main className="content-wrapper">
      <TaskForm addTask={task => setTasks(prevState => ([...prevState, task]))} />
    </main>
  );
}

export default App;

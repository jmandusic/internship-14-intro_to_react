import { useState } from "react";
import "./styles/add-todo.css";
import "./styles/todos.css";
import TaskForm from "./components/TaskForm";
import TaskListDisplay from "./components/TaskListDisplay";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <main className="content-wrapper">
      <TaskForm
        addTask={(task) => setTasks((prevState) => [...prevState, task])}
      />

      <section className="todos__section">
        <header className="section__header">
          <h2 className="todos__header">Todos</h2>
        </header>
        <TaskListDisplay tasks={tasks} />
      </section>
    </main>
  );
}

export default App;

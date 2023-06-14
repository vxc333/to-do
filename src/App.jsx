import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const addTask = () => {
    if (currentTask !== "") {
      const newTask = {
        id: tasks.length + 1,
        title: currentTask,
        done: false,
      };
      setTasks([...tasks, newTask]);
      setCurrentTask("");
    }
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleCompleted = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div id="container">
      <h1>Todo List</h1>

      <div id="search">
        <input
          type="text"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
        />
        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>

      <ul id="task">
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.done ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>
            <div>
            <button id="remove" onClick={() => removeTask(task.id)}>
              Excluir
            </button>
            <button id="done" onClick={() => toggleCompleted(task.id)}>
              {task.done ? "Desmarcar" : "Marcar como Concluído"}
            </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

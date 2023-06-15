import { useEffect } from "react";
import "./App.css";
import { useStateBox } from "./utils/state";

function AddTaskForm() {
  const { addTask } = useStateBox();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const input = formData.get("taskInput") as string;
    addTask(input);

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="taskInput" />
      <button type="submit">Add</button>
    </form>
  );
}

function App() {
  const tasks = useStateBox((state) => state.tasksList);
  const deleteTask = useStateBox((state) => state.deleteTask);

  useEffect(() => {
    document.title = "Todonner";
  }, []);

  return (
    <div className="container">
      <h1>Todonner</h1>

      <AddTaskForm />

      <ul className="todo-list">
        {tasks.map((task, i) => (
          <li className="todo-item">
            {task} <button onClick={() => deleteTask(i)}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

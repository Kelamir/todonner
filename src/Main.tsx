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

function DisplayTasks() {
  const tasks = useStateBox((state) => state.tasksList);

  return (
    <>
      <ul className="todo-list">
        {tasks.map((task, i) => (
          <li className="todo-item">
            {task} <button>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Todonner</h1>

      <AddTaskForm />
      <DisplayTasks />
    </div>
  );
}

export default App;

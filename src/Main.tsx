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

  return <div>{tasks}</div>;
}

function App() {
  return (
    <div className="container">
      <h1>Todonner</h1>

      <AddTaskForm />
      <DisplayTasks />

      <ul className="todo-list">
        <li className="todo-item">
          Task 1 <button>Delete</button>
        </li>
        <li className="todo-item">
          Task 2 <button>Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default App;

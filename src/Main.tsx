import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Todonner</h1>
      <button>Add todo</button>
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

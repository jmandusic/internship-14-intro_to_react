import "./styles/add-todo.css";
import "./styles/todos.css";

function App() {
  return (
    <main className="content-wrapper">
      <form className="add-todo__form">
        <h2 className="add-todo__header">Add todos</h2>
        <input required placeholder="Title" className="add-todo__title" />
        <textarea required placeholder="Description"></textarea>
        <select required className="add-todo__priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit" required className="add-todo__submit-button">
          SUBMIT
        </button>
        <p className="add-todo__error-message"></p>
      </form>

      <section className="todos__section">
        <h2 className="todos__header">Todos</h2>
      </section>
    </main>
  );
}

export default App;

import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [formState, setFormState] = useState({
    id: 1,
    title: "",
    description: "",
    priority: "Low",
    isChecked: false,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const titleChangeHandler = (e) => {
    setFormState((prevState) => ({ ...prevState, title: e.target.value }));
  };

  const descriptionChangeHandler = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      description: e.target.value,
    }));
  };

  const priorityChangeHandler = (e) => {
    setFormState((prevState) => ({ ...prevState, priority: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formState.title) {
      setErrorMessage("Title is a required field");
      return;
    }

    if (!formState.description) {
      setErrorMessage("Description is a required field");
      return;
    }

    addTask(formState);
    setFormState((prevState) => ({
      id: prevState.id + 1,
      title: "",
      description: "",
      priority: "Low",
      isChecked: false,
    }));
    setErrorMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo__form">
      <header className="form__header">
        <h2 className="add-todo__header">Add todos</h2>
      </header>

      <input
        value={formState.title}
        name="title"
        placeholder="Title"
        className="add-todo__title"
        onChange={titleChangeHandler}
      />

      <textarea
        value={formState.description}
        name="description"
        placeholder="Description"
        className="add-todo__description"
        onChange={descriptionChangeHandler}
      ></textarea>

      <select
        value={formState.priority}
        className="add-todo__priority"
        onChange={priorityChangeHandler}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button type="submit" className="add-todo__submit-button">
        SUBMIT
      </button>

      {errorMessage && (
        <span className="form__error-message">
          Invalid form: {errorMessage}
        </span>
      )}
    </form>
  );
};

export default TaskForm;

import { useState } from "react";

const TaskList = ({ tasks }) => {
  const [checkboxes, setCheckboxes] = useState(
    [
      {
        checked: false,
      },
    ] * tasks.length
  );

  if (tasks.length === 0) {
    return <p className="todos__message">No items</p>;
  }

  const checkboxChangeHandler = (e, id) => {
    setCheckboxes((prevState) => ({
      ...prevState[id],
      checked: e.target.checked,
    }));
  };

  return (
    <ul className="todos__list">
      {tasks.map(({ title, priority }, id) => (
        <li key={id} className="todos__list-element">
          <h2 className="element__title">{title}</h2>

          <div className="element-container">
            <label className="element__priority">{priority}</label>

            <input
              type="checkbox"
              checked={checkboxes[id]?.checked}
              onChange={(e) => checkboxChangeHandler(e, id)}
              className="element__checkbox"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

import { useState } from "react";

const Task = ({ task }) => {
  const [taskOnCheck, setTaskOnCheck] = useState(task);

  const checkboxChangeHandler = (e) => {
    setTaskOnCheck((prevState) => ({
      ...prevState,
      isChecked: e.target.checked,
    }));
  };

  return (
    <li className="todos__list-element">
      {taskOnCheck.isChecked ? (
        <h2 className="element__title--styled">{taskOnCheck.title}</h2>
      ) : (
        <h2 className="element__title">{taskOnCheck.title}</h2>
      )}

      <div className="element__status-container">
        <label className="element__priority">{taskOnCheck.priority}</label>

        <input
          type="checkbox"
          checked={taskOnCheck.isChecked}
          onChange={checkboxChangeHandler}
          className="element__checkbox"
        />
      </div>
    </li>
  );
};

export default Task;

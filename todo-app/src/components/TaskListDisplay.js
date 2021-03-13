import TaskList from "./TaskList";

const TaskListDisplay = ({tasks}) => {
    return (
        <>
        {tasks.length === 0 ? (
            <p className="todos__message">No items</p>
          ) : (
            <TaskList tasks={tasks} />
          )}
        </>
    )
}

export default TaskListDisplay;
import { useSelector } from "react-redux";

const TodoActions = () => {
  const todos=useSelector(state=>state.todos.data)
    const length = todos.length;
  const filterComLen = todos.filter((todo) => todo.completed).length;

  return (
    <div className="meta">
      <div className="progress-wrapper">
        <progress value={filterComLen} max={length}></progress>
        <span>
          {filterComLen}/{length} completed
        </span>
      </div>
      <div className="actions">
        <button type="submit" className="actions__clear-btn">Clear</button>
        <button type="submit" className="actions__check-btn">Check all</button>
      </div>
    </div>
  );
};

export default TodoActions;

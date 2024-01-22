import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {deleteTodoAction} from '../redux/action.js'
import {editTodoAction}  from '../redux/action.js'

// component of edit and save one todo
const EditTodo = ({ todo, setIsEdited}) => {
  const [editValue, setEditValue] = useState(todo.title);
const dispatch =useDispatch()
  const handelSave = () => {
    setIsEdited(false);
    const newTodo = {
      ...todo,
      title: editValue,
    };
    dispatch( editTodoAction(newTodo));
  };
  return (
    <>
      <input
        type="text"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        className="todo__input"
      />
      <button onClick={handelSave} className="save-btn">
        Save
      </button>
    </>
  );
};
// body of todo component
const TodoContent = ({
  todo,
  setIsEdited,
  handelTodoEditCheckClick,
  handleDelete,
}) => {
  return (
    <>
      <input
        className="todo__checkbox"
        id={`todo-${todo.id}`}
        type="checkbox"
        checked={todo.completed}
        onChange={handelTodoEditCheckClick}
      />
      <label className="todo__label" htmlFor={`todo-${todo.id}`}>
        {todo.title}
      </label>
      <button onClick={() => setIsEdited(true)} className="todo__edit-button">
        <BiEdit size="1.5em" color="var(--primary-color)" />
      </button>
      <button
        onClick={() => handleDelete(todo.id)}
        className="todo__delete-button"
      >
        <BiTrash size="1.5em" color="var(--red)" />
      </button>
    </>
  );
};

// component of one todo
const Todo = ({ todo}) => {
  const[isEdited, setIsEdited]=useState()
  const dispatch = useDispatch()

  // // function to handel the check in list
  const handelTodoEditCheckClick = () => {
    const newTodo={
      ...todo,
      completed: !todo.completed,
    };
    dispatch(editTodoAction(newTodo))
  };
const handleDelete=(id)=>{
  dispatch(deleteTodoAction(id))
}
  // condition browser rendering => do condition return components
  return (
    <li className="todo">
      {isEdited ? (
        <EditTodo
          setIsEdited={setIsEdited}
          todo={todo}
     
        />
      ) : (
        <TodoContent
          setIsEdited={setIsEdited}
          todo={todo}
          handelTodoEditCheckClick={handelTodoEditCheckClick}
          handleDelete={handleDelete}
        />
      )}
    </li>
  );
};

// main components to show one todo and body
const Todos = () => {
  const todos=useSelector(state=>state.todos.data)
  return (
    <ul className="todos">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
};

export default Todos;

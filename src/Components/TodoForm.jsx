import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoFetchData} from "../ReduxToolKit/Slice/todoslice";



const TodoForm = () => {
  const dispatch = useDispatch()

  const [inpValue, setInpValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!inpValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      title: inpValue,
      completed: false,
    };
  //   //it the old way
  //   // addTodoFetchData(newTodo,dispatch)
  //   //to new way 2fun-->1arg
  //   // addTodoFetchData(newTodo)(dispatch)

  //  dispatch(addTodoFetchData(newTodo))
 dispatch(addTodoFetchData(newTodo))

    setInpValue("");
  }
  return (
    <form onSubmit={handleSubmit} className="add-form">
      <fieldset className="add-form__fieldset">
        <legend className="add-form__legend">Write a new todo item</legend>
        <input
          aria-label="Input for add new todo"
          placeholder="Learn html"
          className="add-form__input"
          type="text"
          value={inpValue}
          onChange={(e) => setInpValue(e.target.value)}
        />
        <button className="btn btn--primary add-form__submit" type="submit">
          Add
        </button>
      </fieldset>
    </form>
  );
};
export default TodoForm;

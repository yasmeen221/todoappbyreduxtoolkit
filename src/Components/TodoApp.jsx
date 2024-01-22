
import TodoActions from "./TodoActions";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
// same as ApI
// const fakeTodos = [
//   { id: 1, title: "html5", completed: false },
//   { id: 2, title: "css3", completed: true },
//   { id: 3, title: "js", completed: false },
// ];
const TodoApp = () => {
  return (
    <div className="main-container">
      <TodoForm />
      <TodoActions />
      <Todos/>
    </div>
  );
};

export default TodoApp;

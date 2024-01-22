import { combineReducers } from "redux";

export function todosReducer(todos = {}, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...todos, data: [action.todo, ...todos.data] };
    // return [...todos, action.todo];
    case "EDIT_TODO":
      return {
        ...todos,
        data: todos.data.map((todo) =>
          todo.id == action.todo.id ? action.todo : todo
        ),
      };
    case "DELETE_TODO":
      return { data: todos.data.filter((todo) => todo.id != action.id) };

    case "ADD_LOADING":
      return { ...todos, isLoading: true };
    case "ADD_STOP_LOADING":
      return { ...todos, isLoading: false };
    default:
      return todos;
  }
}

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;

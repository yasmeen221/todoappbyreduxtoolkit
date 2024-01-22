import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
};
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (todos, action) => {
      todos.data.unshift(action.payload.data);
    },
    addLoading: (todos) => {
      todos.isLoading = true;
    },

    addStopLoading: (todos) => {
      todos.isLoading = false;
    },

    // removeTodo: (todos, { payload }) => {
    //   return todos.data.filter((todo) => todo.id !== payload);
    // },
    // editTodo: (todos, { payload: { id, value } }) => {
    //   let index = todos.data.findIndex((todo) => todo.id === id);
    //   todos.data[index] = { ...todos.data[index], value };
    // },
    // fetchData: (state, action) => {
    //   state.isLoading = true;
    //   setTimeout(() => {
    //     state.data = action.payload;
    //     state.isLoading = false;
    //   }, 1000);
    // },
  },
});
console.log(todoSlice);
const todosReducer = todoSlice.reducer;
const { addTodo, addLoading, addStopLoading } = todoSlice.actions;

const addTodoFetchData = (newTodo) => {
  //thunk
  return (dispatch) => {
    //handel load
    dispatch(addLoading());
    axios
      .post("https://jsonplaceholder.typicode.com/todos", newTodo)
      .then(() => {
        dispatch(addTodo(newTodo));
        dispatch(addStopLoading());
      })
      .catch((e) => {
        dispatch(addStopLoading());

        console.log(e);
      });
  };
};
export { addTodo, addTodoFetchData };
export default todosReducer;

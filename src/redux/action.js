import axios from "axios";

export const addTodoAction = (todo) => {
  return {
    type: "ADD_TODO",
    todo,
  };
};

export const editTodoAction = (todo) => {
  return {
    type: "EDIT_TODO",
    todo,
  };
};

export const deleteTodoAction = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};
const addLoading = () => {
  return {
    type: "ADD_LOADING",
  };
};
const addStopLoading = () => {
  return {
    type: "ADD_STOP_LOADING",
  };
};
//i do it in here because reducer pure function not has side effect
//but this lack performance so i (curry told we do 2function==>1 argument)
// export const addTodoFetchData=(newTodo,dispatch)=>{
//     axios.post("https://jsonplaceholder.typicode.com/todos",newTodo)
//     .then(()=>{
//         dispatch(addTodoAction(newTodo));
//     }).catch((e)=>{
//         console.log(e)
//     })
// }

export const addTodoFetchData = (newTodo) => {
  //thunk
  return (dispatch) => {
    //handel load
    dispatch(addLoading());
    axios
      .post("https://jsonplaceholder.typicode.com/todos", newTodo)
      .then(() => {
        dispatch(addTodoAction(newTodo));
        dispatch(addStopLoading());
      })
      .catch((e) => {
        dispatch(addStopLoading());

        console.log(e);
      });
  };
};

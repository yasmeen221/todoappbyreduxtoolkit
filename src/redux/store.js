import {legacy_createStore as createStore ,applyMiddleware} from "redux";
import rootReducer from "./reducer";
import {thunk} from 'redux-thunk'
// const tools= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store=createStore(
    rootReducer, 
    {todos:{
        data:[],
        isLoading:false,
    }},
    applyMiddleware(thunk)
    );
export default store
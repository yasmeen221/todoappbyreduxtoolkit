import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './Slice/todoslice'

 const store = configureStore({
  reducer: {
    todos:todosReducer,
  },
})

export default store
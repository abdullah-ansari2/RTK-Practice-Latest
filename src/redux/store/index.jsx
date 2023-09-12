import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice'
import todoReducer from '../slices/todoSlice'


// Multiple Slices
const rootReducer = {
    counter: counterReducer,
    todos: todoReducer  //Not in use, just for reference
};

const store = configureStore({
    reducer: rootReducer
});

// Single Slice
// const store = configureStore({
//     counter: counterReducer
// });

export default store;
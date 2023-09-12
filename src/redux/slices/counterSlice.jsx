import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        isLoading: false,
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count = state.count > 0 ? state.count - 1 : state.count;
        },
    },
});

export const { increment, decrement, setLoading } = counterSlice.actions;
export default counterSlice.reducer;

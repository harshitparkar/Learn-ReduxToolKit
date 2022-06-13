// // Contains Both Action & Reduces
// // This file will be diffrent for every state we want to handel
// import { createAction, createReducer } from "@reduxjs/toolkit";

// //ActionType
// export const increment = createAction("increment/counter"); // whatever we pass in createAction is ActionType and it should be unique.
// export const decrement = createAction("decrement/counter");
// export const incrementAmount = createAction("incrementAmount/counter");

// //Initial State
// const initialState = {
//   value: 0,
// };

// //Reducer
// //1. Using Builder Notation
// export const CounterSlice = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state, action) => {
//       state.value++;
//     })
//     .addCase(decrement, (state, action) => {
//       state.value--;
//     })
//     .addCase(incrementAmount, (state, action) => {
//       state.value += action.payload;
//     });
// });

//##### Create Slice
// Create Slice will create both Action & Reducer automatically
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

//Creating Slices
export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value++;
    },
    decrement: (state, action) => {
      state.value--;
    },
    incrementAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action Exported
export const { increment, decrement, incrementAmount } = CounterSlice.actions;

// Reducer Exported
export default CounterSlice.reducer;

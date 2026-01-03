import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value:0
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByamount: (state, actions) => {
      state.value += actions.payload
    }
  }
})
export const {increment, decrement, incrementByamount} = counterSlice.actions
export default counterSlice.reducer
// export default counterReducer
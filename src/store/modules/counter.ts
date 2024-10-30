import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 100,
    message: 'Hello Redux'
  },
  reducers: {
    increment: (state) => {
      state.count++
    },
    decrement: (state) => {
      state.count--
    }
  }
})

export default counterSlice.reducer
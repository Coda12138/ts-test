import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'Hello Redux'
  },
  reducers: {
    changeMessageAction(state, { payload }) {
      state.message = payload
    },
    increment: (state) => {
      state.count++
    },
    decrement: (state) => {
      state.count--
    }
  }
})

export const { changeMessageAction, increment, decrement } =
  counterSlice.actions
export default counterSlice.reducer

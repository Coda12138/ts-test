import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  count: number
  message: string
}

const initialState: IState = {
  count: 100,
  message: 'Hello Redux'
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMessageAction(state, { payload }: PayloadAction<string>) {
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

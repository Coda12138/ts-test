// 1.注册store
// 2.在index.tsx文件中通过Provider引入store
import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

import counterReducer from './modules/counter'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

type GetStateFnState = typeof store.getState
export type IRootState = ReturnType<GetStateFnState>
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

export default store
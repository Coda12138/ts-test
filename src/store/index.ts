// 1.注册store
// 2.在index.tsx文件中通过Provider引入store
import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  useDispatch,
  TypedUseSelectorHook,
  shallowEqual
} from 'react-redux'

import counterReducer from './modules/counter'
import recommendReducer from '@/pages/Example2/discover/c-pages/recommend/store/recommend'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer
  }
})

// 动态获取store结构类型
type GetStateFnState = typeof store.getState
type IRootState = ReturnType<GetStateFnState>
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store

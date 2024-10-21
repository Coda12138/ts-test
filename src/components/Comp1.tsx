import React, { memo, useCallback } from 'react'
interface IProps {
  num: number
  setNum: (num: number) => void
}
const Sub = memo(() => {
  console.log('Sub被渲染了') // 这行代码在父组件App2更新时，它也被迫一直更新
  return <h3>Sub组件</h3>
})
const Comp1: React.FC<IProps> = function (props) {
  return (
    <>
      <h3>{props.num}</h3>
      <button onClick={() => props.setNum(props.num + 1)}>累加</button>
      <Sub />
    </>
  )
}
export default Comp1

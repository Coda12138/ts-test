import React, { useState, useEffect } from 'react'
import Comp1 from '../../components/Comp1'

const Example1: React.FC = () => {
  const [num, setNum] = useState<number>(0)

  useEffect(() => {
    console.log('comopnentDidUpdate')
  }, [num])

  return (
    <>
      <h2>启动了</h2>
      <Comp1 num={num} setNum={setNum} />
    </>
  )
}

export default Example1

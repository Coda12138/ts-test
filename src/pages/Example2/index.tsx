import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet, Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Example2: FC<IProps> = () => {
  return (
    <>
      <div className="title">Coda云音乐</div>
      <div className="nav">
        <Link to="/codaSong/discover">发现音乐</Link>
        <Link to="/codaSong/mine">我的音乐</Link>
        <Link to="/codaSong/focus">关注</Link>
        <Link to="/codaSong/download">下载客户端</Link>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  )
}

export default memo(Example2)
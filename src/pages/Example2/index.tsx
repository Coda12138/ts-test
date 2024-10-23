import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Example2() {
  return (
    <>
      <div className="title">Coda云音乐</div>
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <Outlet />
    </>
  )
}

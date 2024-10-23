import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import { Outlet, Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <div>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/rank">排行</Link>
        <Link to="/discover/songs">歌单</Link>
        <Link to="/discover/djradio">电台</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/album">专辑</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default memo(Discover)


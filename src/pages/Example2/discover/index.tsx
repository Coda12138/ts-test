import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet, Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <div>
        <Link to="/codaSong/discover/recommend">推荐</Link>
        <Link to="/codaSong/discover/rank">排行</Link>
        <Link to="/codaSong/discover/songs">歌单</Link>
        <Link to="/codaSong/discover/djradio">电台</Link>
        <Link to="/codaSong/discover/artist">歌手</Link>
        <Link to="/codaSong/discover/album">专辑</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default memo(Discover)

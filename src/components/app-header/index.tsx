import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'

import headerTitles from '@/assets/data/header-titles.json'

interface IProps {
  children?: ReactNode
}

interface IHeaderTitle {
  title: string
  type: string
  link: string
}

const AppHeader: FC<IProps> = () => {
  function showItem(item: IHeaderTitle): React.ReactNode {
    if(item.type === 'path') {
      return <NavLink 
        to={item.link}
        className={({isActive}) => {
          return isActive ? 'active' : ''
        }}
      >
        {item.title}
        <i className='icon sprite_01'></i>
      </NavLink>
    } else {
      return <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
    }  
  }
  
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">网易云音乐</a>
          <div className="title-list">
            {
              (headerTitles as IHeaderTitle[]).map(item => {
                return (
                  <div className="item" key={item.title}>
                    {showItem(item)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <span className='input'>input</span>
          <span className='center'>创作者中心</span>
          <span className='login'>登录</span>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)

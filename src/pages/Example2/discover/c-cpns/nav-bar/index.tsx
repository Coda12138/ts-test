import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import { NavLink } from 'react-router-dom'
import { NavWrapper } from './style'
import discoverTitles from '@/assets/data/discover-titles.json'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return <NavWrapper>
    <div className='nav wrap_v1'>
      {
        discoverTitles.map((item, index) => {
          return <div className='item' key={item.link}>
            <NavLink to={item.link}>{item.title}</NavLink>
          </div>
        })
      }
    </div>
  </NavWrapper>
}

export default memo(NavBar)
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import RootWrapper from './style'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}
const AlbumItem: FC<IProps> = memo(props => {
  const { itemData } = props

  return (
    <RootWrapper className='sprite_02'>
      <div className='top'>
        <img src={getImageSize(itemData.picUrl, 100)} alt='' />
        <a href='' className='cover sprite_cover'></a>
        <a href='' className='play sprite_icon'></a>
      </div>
      <div className='bottom'>
        <div className='name'>{itemData.name}</div>
        <div className='artist'>{itemData.artist.name}</div>
      </div>
    </RootWrapper>
  )
})

AlbumItem.displayName = 'AlbumItem'

export default AlbumItem

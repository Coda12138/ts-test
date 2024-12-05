import React, { memo, useRef, useState, useCallback } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { useAppSelector, shallowEqualApp } from '@/store'
import { Carousel, Button } from 'antd'
import { BannerControl, BannerMain, BannerWrapper } from './style'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const { banners } = useAppSelector(
    state => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  )

  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  // 走马灯，切换前，事件
  const onCarouselBeforechange = useCallback((from: number, to: number) => {
    setCurrentIndex(to)
  }, [])

  // 指示器
  const onDotClick = (index: number) => {
    bannerRef.current?.goTo(index)
  }

  // 事件处理函数
  const handlePrevClick = () => {
    bannerRef.current?.prev()
  }

  const handleNextClick= () => {
    bannerRef.current?.next()
  }

  const bgImgUrl =
  currentIndex >= 0 && banners.length > 0
    ? banners[currentIndex].imageUrl + '?imageView&blur=40x20'
    : ''

  return <BannerWrapper style={{ background: `url('${bgImgUrl}') center center / 6000px` }}>
    <div className="banner wrap-v2">
      <BannerMain>
        <Carousel
          autoplay
          dots={false}
          effect="fade"
          ref={bannerRef}
          beforeChange={onCarouselBeforechange}
        >
          {
            banners.map(item => (
              <div className="banner-item" key={item.imageUrl}>
                <img className="image" src={item.imageUrl} alt={item.typeTitle} />
              </div>
            ))
          }
        </Carousel>
        {/* 轮播图指示器 */}
        <ul className='dots'>
          {banners.map((item, index) => (
            <li key={item.imageUrl}>
              <span
                className={classNames('item', { active: index === currentIndex })}
                onClick={() => onDotClick(index)}
              ></span>
            </li>
          ))}
        </ul>
      </BannerMain>
      <BannerControl>
        <Button className='btn left' onClick={handlePrevClick}></Button>
        <Button className='btn right' onClick={handleNextClick}></Button>
      </BannerControl>
    </div>
  </BannerWrapper>
}

export default memo(TopBanner)
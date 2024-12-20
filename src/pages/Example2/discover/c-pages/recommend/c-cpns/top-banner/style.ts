import styled from "styled-components";

export const BannerWrapper = styled.div`
  transition: background-image linear 0.5s;

  .banner {
    height: 285px;
    display: flex;
    position: relative;
  }
`

export const BannerMain = styled.div`
  position: relative;
  z-index: 9;
  width: 730px;
  height: 100%;
  margin: 0 auto;

  .banner-item {
    overflow: hidden;
    height: 285px;
    .image {
      height: 285px;
      width: 100%;
    }
  }

  .dots {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    > li {
      margin: 0 2px;

      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(${require('@/assets/img/banner_sprite.png')}) 3px -343px;
        cursor: pointer;

        &:hover,
        &.active {
          background-position: -14px -343px;
        }
      }
    }
  }
`

export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  position: relative;
  width: 254px;
  height: 100%;
  background: url(${require('@/assets/img/download.png')});
  z-index: 9;

  p {
    font-size: 12px;
    color: #aaa;
    position: absolute;
    bottom: 15px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 63px;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.3) !important;
      background: none !important;
    }
  }

  .left {
    left: 200px;
    background-position: 0 -360px;
  }

  .right {
    right: 200px;
    background-position: 0 -508px;
  }
`
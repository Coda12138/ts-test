import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

interface IProps {
  children?: ReactNode
}

const Example2: FC<IProps> = () => {
  return (
    <>
      <AppHeader />
      <Suspense>
        <Outlet />
      </Suspense>
      <AppFooter />
    </>
  )
}

export default memo(Example2)

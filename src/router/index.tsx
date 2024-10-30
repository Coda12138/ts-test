import React, { lazy } from 'react'
// import App from '../App'
import { Navigate, RouteObject } from 'react-router-dom'

// 分包处理（路由的懒加载）
const Home = lazy(() => import('@/pages/Home'))
const Example1 = lazy(() => import('@/pages/Example1'))
const Example2 = lazy(() => import('@/pages/Example2'))

const Discover = lazy(() => import('@/pages/Example2/discover'))
const Recommend = lazy(
  () => import('@/pages/Example2/discover/c-pages/recommend')
)
const Rank = lazy(() => import('@/pages/Example2/discover/c-pages/rank'))
const Songs = lazy(() => import('@/pages/Example2/discover/c-pages/songs'))
const Album = lazy(() => import('@/pages/Example2/discover/c-pages/album'))
const Artist = lazy(() => import('@/pages/Example2/discover/c-pages/artist'))
const DjRadio = lazy(() => import('@/pages/Example2/discover/c-pages/djradio'))

const Mine = lazy(() => import('@/pages/Example2/mine'))
const Focus = lazy(() => import('@/pages/Example2/focus'))
const Download = lazy(() => import('@/pages/Example2/download'))

// 路由配置 type 1
// const MyRouter: React.FC = () => (
//   <Router>
//     <Routes>
//       <Route element={<App />}>
//         <Route path="/home" element={<Home />}></Route>
//         <Route path="/example1" element={<Example1 />}></Route>

//         <Route path="/" element={<Example2 />}></Route>
//         <Route path="/discover" element={<Discover />}></Route>
//         <Route path="/mine" element={<Mine />}></Route>
//         <Route path="/focus" element={<Focus />}></Route>
//         <Route path="/download" element={<Download />}></Route>
//       </Route>
//     </Routes>
//   </Router>
// )
// export default MyRouter

// 路由配置 type 2
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/codaSong" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/example1',
    element: <Example1 />
  },
  {
    path: '/codaSong',
    element: <Example2 />,
    children: [
      {
        path: '/codaSong',
        element: <Navigate to="/codaSong/discover" />
      },
      {
        path: '/codaSong/discover',
        element: <Discover />,
        children: [
          {
            path: '/codaSong/discover',
            element: <Navigate to="/codaSong/discover/recommend" />
          },
          {
            path: '/codaSong/discover/recommend',
            element: <Recommend />
          },
          {
            path: '/codaSong/discover/songs',
            element: <Songs />
          },
          {
            path: '/codaSong/discover/rank',
            element: <Rank />
          },
          {
            path: '/codaSong/discover/album',
            element: <Album />
          },
          {
            path: '/codaSong/discover/artist',
            element: <Artist />
          },
          {
            path: '/codaSong/discover/djradio',
            element: <DjRadio />
          }
        ]
      },
      {
        path: '/codaSong/mine',
        element: <Mine />
      },
      {
        path: '/codaSong/focus',
        element: <Focus />
      },
      {
        path: '/codaSong/download',
        element: <Download />
      }
    ]
  }
]

export default routes

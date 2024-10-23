import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App

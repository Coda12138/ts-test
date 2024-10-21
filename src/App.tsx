import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={'/example1'}>Coda云累加</Link>
        </li>
        <li>
          <Link to={'/example2'}>Coda云音乐</Link>
        </li>
      </ul>
      <Outlet />
    </>
  )
}

export default App

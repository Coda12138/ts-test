import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'normalize.css'
import '@/assets/css/index.less'
import App from './App'

const rootElement: HTMLElement = document.getElementById('root') as HTMLElement
const root = ReactDOMClient.createRoot(rootElement)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

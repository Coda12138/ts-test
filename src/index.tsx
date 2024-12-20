import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import 'normalize.css'
import '@/assets/css/index.less'

import App from '@/App'
import store from '@/store'
import theme from '@/assets/theme'

const rootElement: HTMLElement = document.getElementById('root') as HTMLElement
const root = ReactDOMClient.createRoot(rootElement)
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
)

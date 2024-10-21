import * as ReactDOMClient from 'react-dom/client'
import MyRouter from '@/router'

const rootElement: HTMLElement = document.getElementById('root') as HTMLElement
const root = ReactDOMClient.createRoot(rootElement)
root.render(<MyRouter />)

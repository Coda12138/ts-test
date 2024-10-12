import * as ReactDOMClient from 'react-dom/client';
import App from './App'

const rootElement: HTMLElement = document.getElementById("root") as HTMLElement; 
const root = ReactDOMClient.createRoot(rootElement);
root.render(<App/>);
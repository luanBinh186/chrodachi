import { createRoot } from 'react-dom/client';
import App from '../components/App';
import './popup.css'

let iDiv = document.createElement('div');
iDiv.id = 'root';
document.body.appendChild(iDiv)
const domNode = document.getElementById('root');
const root = createRoot(domNode!);
root.render(<App />)
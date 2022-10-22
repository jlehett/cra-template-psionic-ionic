import { createRoot } from 'react-dom/client';
import Root from './root/root';
import './robots.txt';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Root/>);

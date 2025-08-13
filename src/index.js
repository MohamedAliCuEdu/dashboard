import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import App from './app';

const mountNode = document.getElementById('root') || document.querySelector('.root');
const root = ReactDOM.createRoot(mountNode);
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
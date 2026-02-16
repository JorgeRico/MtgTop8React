import { createRoot } from 'react-dom/client';
import './styles/common.css';
import './styles/styles.css';
import App from './App';
import "./utils/i18n";

createRoot(document.getElementById('root')).render(
    <App />
);

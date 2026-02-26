import './styles/common.css';
import './styles/styles.css';
import "./utils/i18n";
import App from './App';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
    createRoot(rootElement).hydrate(
        <App />
    );
} else {
    createRoot(rootElement).render(
        <App />
    );
}
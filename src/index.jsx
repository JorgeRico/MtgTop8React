import './styles/common.css';
import './styles/styles.css';
import "./utils/i18n";
import App from './App';
import { createRoot, hydrateRoot } from 'react-dom/client';

const target = document.getElementById('root');

import.meta.env.VITE_APP_ENV == "DEV" ? createRoot(target).render(<App />) : hydrateRoot(target, <App />);

export async function prerender(data) {
    const { renderToString } = await import('react-dom/server');
    const { parseLinks }     = await import('vite-prerender-plugin/parse');

    const html  = renderToString(<App {...data} />);
    const links = parseLinks(html);

    return { html, links };
}
import './styles/common.css';
import './styles/styles.css';
import "./utils/i18n";
import App from './App';
import { createRoot, hydrateRoot } from 'react-dom/client';

if (typeof window !== 'undefined') {
    const rootElement = document.getElementById("root");
    import.meta.env.VITE_APP_ENV === "DEV" ? createRoot(rootElement).render(<App />) : hydrateRoot(rootElement, <App />);
}

const fetchData = async (url) => {
    try {
        const data = await fetch(url, { method: 'GET', headers: {'Content-Type': 'application/json' } })
        .then(async (response) => { return response.json(); }).catch((err) => { console.log(err); });

        return data;
    } catch (error) {
        console.log(error);
    }
};

const getSlugs = async (url) => {
    const results = await fetchData(url);
    let slugs = [];

    results.forEach(element => {
        slugs.push(element.id)
    });

    return slugs;
}

export async function prerender(data) {
    const { renderToString } = await import('react-dom/server');
    const { parseLinks }     = await import('vite-prerender-plugin/parse');
    const host_url           = import.meta.env.VITE_APP_API_URL;
    const leagueSlugs        = await getSlugs(host_url + 'leagues/all');
    // const tournamentSlugs = await getSlugs(host_url + 'tournaments/all');
    const html               = renderToString(<App {...data} />);
    const links              = parseLinks(html);

    return {
        html,

        // Optionally add additional links that should be
        // prerendered (if they haven't already been)
        links: 
            [ ...leagueSlugs.map((s) => `/leagues/${s}`) ].concat(Array.from(links)),
        

        // Optional data to serialize into a script tag for use on the client:
        //   <script type="application/json" id="prerender-data">{"url":"/"}</script>
        data: { url: data.url },

        // Optionally configure and add elements to the `<head>` of
        // the prerendered HTML document
        head: {
            // Sets the "lang" attribute: `<html lang="en">`
            // lang: 'en',

            // Sets the title for the current page: `<title>My cool page</title>`
            title: 'Mtg Stats - Legacy Tournaments',

            // Sets any additional elements you want injected into the `<head>`:
            //   <link rel="stylesheet" href="foo.css">
            //   <meta property="og:title" content="Social media title">
            elements: new Set([
                { type: 'link', props: { rel: 'stylesheet', href: 'foo.css' } },
                { type: 'meta', props: { property: 'og:title', content: 'Mtg Stats - Legacy Tournaments' } },
                { type: 'meta', props: { property: 'twitter:title', content: 'Mtg Stats - Legacy Tournaments' } },
            ]),
        },
    };
}
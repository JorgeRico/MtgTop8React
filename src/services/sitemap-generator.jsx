import { SitemapStream } from 'sitemap'
import fs from 'fs';

const fetchData = async (url) => {
    try {
        const data = await fetch(url, { method: 'GET', headers: {'Content-Type': 'application/json' } })
        .then(async (response) => { return response.json(); }).catch((err) => { console.log(err); });

        return data;
    } catch (error) {
        console.log(error);
    }
};

const generateSitemap = (sm, leagueResults, tournamentResults) => {
    sm.pipe(stream);

    // Add static pages
    sm.write({ url: '/', changefreq: 'monthly', priority: 0.8 });
    sm.write({ url: '/contact', changefreq: 'yearly', priority: 0.6 });
    sm.write({ url: '/decklist', changefreq: 'yearly', priority: 0.6 });
    // Add leagues
    leagueResults?.forEach(element => {
        sm.write({ url: sitemapUrl('leagues', element.id), changefreq: 'yearly', priority: 0.6 });
    });
    // Add tournaments
    tournamentResults?.forEach(element => {
        sm.write({ url: sitemapUrl('tournaments', element.id), changefreq: 'yearly', priority: 0.6 });
    });
    sm.end();
    
    stream.on('finish', () => {
        console.log('Sitemap generated successfully');
    });
}

// prod url
const sitemapUrl = (page, id) => {
    return 'https://mtg-stats.vercel.app/' + page + '/' + id
}

// Generate sitemap on local environment
const sm            = new SitemapStream({ hostname: 'https://mtg-stats.vercel.app' });
const stream        = fs.createWriteStream('public/sitemap.xml');
const urlLeague     = 'http://localhost:8000/leagues/all';
const urlTournament = 'http://localhost:8000/tournaments/all';

const leagueResults     = await fetchData(urlLeague);
const tournamentResults = await fetchData(urlTournament);
 
generateSitemap(sm, leagueResults, tournamentResults);

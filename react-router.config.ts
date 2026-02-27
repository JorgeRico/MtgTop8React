/// <reference types="vite/client" />
import { RouteConfig as Config } from "react-router-config";

const fetchData = async (url: string): Promise<any> => {
    try {
        const data = await fetch(url, { method: 'GET', headers: {'Content-Type': 'application/json' } })
        .then(async (response) => { return response.json(); }).catch((err) => { console.log(err); });

        return data;
    } catch (error) {
        console.log(error);
    }
};

const getSlugs = async (url: string) => {
    const results = await fetchData(url);
    let slugs: any[] = [];

    results?.forEach((element: any) => {
        slugs.push(element.id)
    });

    return slugs;
}

const host_url  = import.meta.env.VITE_APP_API_URL;

let leagueSlugs     = await getSlugs(host_url + '/leagues/all');
let tournamentSlugs = await getSlugs(host_url + '/tournaments/all');

export default {
    ssr: true,
    prerender: [
        "/",
        "/contact",
        "/decklist",
        ...leagueSlugs.map((s) => `/leagues/${s}`),
        ...tournamentSlugs.map((s) => `/tournaments/${s}`),
    ],
} satisfies Config;

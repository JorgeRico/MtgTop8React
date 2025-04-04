const host_url  = import.meta.env.VITE_APP_API_URL;

const endpoints = {
    API_HOME        : '/',
    API_HEALTH      : host_url + 'health',
    API_LEAGUES     : host_url + 'leagues',
    API_TOURNAMENTS : host_url + 'tournaments',
    API_PLAYERS     : host_url + 'players',
    API_DECKS       : host_url + 'decks',
    API_STATS       : host_url + 'stats'
}

export default endpoints;
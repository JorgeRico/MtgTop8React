const host_url  = import.meta.env.VITE_APP_API_URL;

const endpoints = {
    API_HOME                  : '/',
    API_HEALTH                : host_url + 'health',

    API_LEAGUE_ID             : host_url + 'leagues/{id}',
    API_LEAGUE_CURRENT        : host_url + 'leagues/current',
    API_LEAGUE_PAST           : host_url + 'leagues/past',
    API_LEAGUE_TOURNAMENTS    : host_url + 'leagues/{id}/tournaments',
    API_LEAGUE_STATS          : host_url + 'leagues/{id}/stats/{option}',
    API_LEAGUE_CARD_STATS     : host_url + 'leagues/{id}/cards/{cardType}/stats',
    
    API_TOURNAMENT_DATA       : host_url + 'tournaments/{id}',
    API_TOURNAMENT_PLAYERS    : host_url + 'tournaments/{id}/players',
    API_TOURNAMENT_STATS      : host_url + 'tournaments/{id}/stats/{option}',
    API_TOURNAMENT_CARD_STATS : host_url + 'tournaments/{id}/cards/{cardType}/stats',

    API_PLAYERS               : host_url + 'players',
    API_DECK                  : host_url + 'decks',
    API_DECK_CARDS            : host_url + 'decks/{id}/cards',
    API_STATS                 : host_url + 'stats',

    HTTP_LEAGUE               : '/leagues/',
    HTTP_TOURNAMENT           : '/tournaments/',
    HTTP_CONTACT              : '/contact'
}

export default endpoints;
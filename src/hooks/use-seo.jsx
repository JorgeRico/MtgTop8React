import { Helmet } from '@dr.pogodin/react-helmet';
import PropTypes from 'prop-types';

function SeoTags(props) {
    const { page, id, name } = props; 
   
    SeoTags.propTypes = {
        page : PropTypes.string,
        id   : PropTypes.number,
        name : PropTypes.string
    };

    const HomeSeoTags = () => {
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>MTG Legacy stats - CAT Legacy</title>
                    <link rel="canonical" href="https://mtg-stats.vercel.app" />
                    <meta name="description" content="Catalan MTG Legacy leagues, tournaments, players and cards"/>

                    <meta property="og:url" content="https://mtg-stats.vercel.app/"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content="Mtg Stats"/>
                    <meta property="og:description" content="Catalan MTG Legacy leagues, tournaments, players and cards"/>
                    <meta property="og:image" content="https://mtg-stats.vercel.app/statistics-bars-with-arrow.jpg"/>
                    <meta property="og:image:width" content="1000"/>
                    <meta property="og:image:height" content="829"/>

                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:domain" content="mtg-stats.vercel.app"/>
                    <meta property="twitter:url" content="https://mtg-stats.vercel.app/"/>
                    <meta name="twitter:title" content="Mtg Stats"/>
                    <meta name="twitter:description" content="Catalan MTG Legacy leagues, tournaments, players and cards"/>
                    <meta name="twitter:image" content="https://mtg-stats.vercel.app/statistics-bars-with-arrow.jpg"/>
                </Helmet>
            </>
        )
    }

    const ContactSeoTags = () => {
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>MTG Legacy stats - CAT Legacy - Contact</title>
                    <link rel="canonical" href="https://mtg-stats.vercel.app/contact" />
                    <meta name="description" content="Contact - Catalan MTG Legacy leagues, tournaments, players and cards"/>

                    <meta property="og:url" content="https://mtg-stats.vercel.app/contact"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content="Mtg Stats - Contact"/>
                    <meta property="og:description" content="Contact - Catalan MTG Legacy leagues, tournaments, players and cards"/>
                    <meta property="og:image" content="https://mtg-stats.vercel.app/statistics-bars-with-arrow.jpg"/>
                    <meta property="og:image:width" content="1000"/>
                    <meta property="og:image:height" content="829"/>

                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:domain" content="mtg-stats.vercel.app"/>
                    <meta property="twitter:url" content="https://mtg-stats.vercel.app/contact"/>
                    <meta name="twitter:title" content="Mtg Stats - Contact"/>
                    <meta name="twitter:description" content="Contact - Catalan MTG Legacy leagues, tournaments, players and cards"/>
                    <meta name="twitter:image" content="https://mtg-stats.vercel.app/statistics-bars-with-arrow.jpg"/>
                </Helmet>
            </>
        )
    }

    const LeagueSeoTags = () => {
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>MTG Legacy stats - League {name} - CAT Legacy</title>
                    <link rel="canonical" href={`https://mtg-stats.vercel.app/leagues/${id}`} />
                    <meta name="description" content="League - Catalan MTG Legacy leagues, tournaments, players and cards"/>

                    <meta property="og:url" content={`https://mtg-stats.vercel.app/leagues/${id}`} />
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content={`Mtg Stats - Legacy League: ${name}`} />
                    <meta property="og:description" content="League - Catalan MTG Legacy leagues, tournaments, players and cards"/>
                    <meta property="og:image" content="https://mtg-stats.vercel.app/statistics-bars-with-arrow.jpg"/>
                    <meta property="og:image:width" content="1000"/>
                    <meta property="og:image:height" content="829"/>

                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:domain" content="mtg-stats.vercel.app"/>
                    <meta property="twitter:url" content={`https://mtg-stats.vercel.app/leagues/${id}`} />
                    <meta name="twitter:title" content="Mtg Stats - League"/>
                    <meta name="twitter:description" content="League - Catalan MTG Legacy leagues, tournaments, players and cards"/>
                    <meta name="twitter:image" content="https://mtg-stats.vercel.app/statistics-bars-with-arrow.jpg"/>
                </Helmet>
            </>
        )
    }

    const TournamentSeoTags = () => {
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>MTG Legacy stats - Tournament {name} - CAT Legacy</title>
                    <link rel="canonical" href={`https://mtg-stats.vercel.app/tournaments/${id}`} />
                    <meta name="description" content="Tournament - Catalan MTG Legacy leagues, tournaments, players and cards"/>

                    <meta property="og:url" content={`https://mtg-stats.vercel.app/tournaments/${id}`} />
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content={`Mtg Stats - Legacy Tournament: ${name}`}/>
                    <meta property="og:description" content="Tournament - Catalan MTG Legacy leagues, tournaments, players and cards"/>
                    <meta property="og:image" content="https://mtg-stats.vercel.app/statistics-bars-with-arrow.jpg"/>
                    <meta property="og:image:width" content="1000"/>
                    <meta property="og:image:height" content="829"/>

                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:domain" content="mtg-stats.vercel.app"/>
                    <meta property="twitter:url" content={`https://mtg-stats.vercel.app/tournaments/${id}`} />
                    <meta name="twitter:title" content="Mtg Stats - Tournament"/>
                    <meta name="twitter:description" content="League - Catalan MTG Legacy leagues, tournaments, players and cards"/>
                    <meta name="twitter:image" content="https://mtg-stats.vercel.app/statistics-bars-with-arrow.jpg"/>
                </Helmet>
            </>
        )
    }

    const DecklistSeoTags = () => {
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>MTG Legacy stats - CAT Legacy - Decklist</title>
                    <link rel="canonical" href="https://mtg-stats.vercel.app/decklist" />
                    <meta name="description" content="Decklist - Catalan MTG Legacy leagues, tournaments, players and cards"/>

                    <meta property="og:url" content="https://mtg-stats.vercel.app/decklist"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content="Mtg Stats - Decklist"/>
                    <meta property="og:description" content="Decklist - Catalan MTG Legacy leagues, tournaments, players and cards"/>
                    <meta property="og:image" content="https://mtg-stats.vercel.app/statistics-bars-with-arrow.jpg"/>
                    <meta property="og:image:width" content="1000"/>
                    <meta property="og:image:height" content="829"/>

                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:domain" content="mtg-stats.vercel.app"/>
                    <meta property="twitter:url" content="https://mtg-stats.vercel.app/decklist"/>
                    <meta name="twitter:title" content="Mtg Stats - Decklist"/>
                    <meta name="twitter:description" content="Decklist - Catalan MTG Legacy leagues, tournaments, players and cards"/>
                    <meta name="twitter:image" content="https://mtg-stats.vercel.app/statistics-bars-with-arrow.jpg"/>
                </Helmet>
            </>
        )
    }

    
    if (page == 'HOME') {
        return (<HomeSeoTags></HomeSeoTags>);
    }

    if (page == 'CONTACT') {
        return (<ContactSeoTags></ContactSeoTags>);
    }

    if (page == 'LEAGUE') {
        return (<LeagueSeoTags></LeagueSeoTags>);
    }

    if (page == 'TOURNAMENT') {
        return (<TournamentSeoTags></TournamentSeoTags>);
    }

    if (page == 'DECKLIST') {
        return (<DecklistSeoTags></DecklistSeoTags>);
    }
}

export default SeoTags;
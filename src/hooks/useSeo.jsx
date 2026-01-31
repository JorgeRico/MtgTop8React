import { useState } from "react";

function SeoTags(props) {
    const { title, canonical, description } = props;
    const [ url, setUrl ]                   = useState("https://mtg-stats.vercel.app/");

    return (
        <>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <link rel="canonical" href={url+canonical} />
            <meta name="description" content={description} />

            <meta property="og:url" content={url+canonical}/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Mtg Stats"/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content="https://mtg-stats.vercel.app/statistics-bars-with-arrow.jpg"/>
            <meta property="og:image:width" content="1000"/>
            <meta property="og:image:height" content="829"/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta property="twitter:domain" content="mtg-stats.vercel.app"/>
            <meta property="twitter:url" content={url+canonical}/>
            <meta name="twitter:title" content="Mtg Stats"/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content="https://mtg-stats.vercel.app/statistics-bars-with-arrow.jpg"/>
        </>
    )
}

export default SeoTags;
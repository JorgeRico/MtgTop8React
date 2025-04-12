import React from 'react';
import Instagram from "/src/assets/images/instagram.png";
import XImg from "/src/assets/images/x.png";
import CatMagic from "/src/assets/images/youtube.png";
import Twitch from "/src/assets/images/twitch.png";
import LinkImage from "/src/components/Link/Image";
import "./module.css";
// import GoogleAdDesktop from '/src/components/Ads/Desktop';
// import GoogleAdMobile from '/src/components/Ads/Mobile';
import { useMobile } from 'hooks/use-mobile'; 

export default function Footer() {
    const mobile = useMobile();

    return (
        <>
            <div className="footer">
                <div className="social mb20">
                    <div className="links">
                        <LinkImage url="https://www.instagram.com/legacy.cat/" img={Instagram} />
                        <LinkImage url="https://x.com/Lliga_Legacy" img={XImg} />
                        <LinkImage url="https://www.youtube.com/@catmagiclegacy" img={CatMagic} />
                        <LinkImage url="https://www.twitch.tv/catmagiclegacy" img={Twitch} />         
                    </div>           
                </div>
                <div className="message mt10">
                    The literal and graphical information presented on this site about Magic: The Gathering, including card images and mana symbols, is copyright Wizards of the Coast, LLC. Scryfall is not produced by or endorsed by Wizards of the Coast.
                </div>
                <div className="message mt10">Ugly design rules!!!</div>
            </div>
        </>
    );
}
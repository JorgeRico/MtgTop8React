import React from 'react';
import Instagram from "/src/assets/images/instagram.png";
import XImg from "/src/assets/images/x.png";
import CatMagic from "/src/assets/images/youtube.png";
import Twitch from "/src/assets/images/twitch.png";
import LinkImage from "/src/components/Link/Image";
import "./module.css";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className=" social mb20">
                    <LinkImage url="https://www.instagram.com/legacy.cat/" img={Instagram} />
                    <LinkImage url="https://x.com/Lliga_Legacy" img={XImg} />
                    <LinkImage url="https://www.youtube.com/@catmagiclegacy" img={CatMagic} />
                    <LinkImage url="https://www.twitch.tv/catmagiclegacy" img={Twitch} />                    
                </div>
                <div className=" message">
                    The literal and graphical information presented on this site about Magic: The Gathering, including card images and mana symbols, is copyright Wizards of the Coast, LLC. Scryfall is not produced by or endorsed by Wizards of the Coast.
                </div>
                <div className=" message mt10">Ugly design rules!!!</div>
                <div>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9482818665347681" crossorigin="anonymous"></script>
                    <ins class="adsbygoogle"
                        style="display:block"
                        data-ad-client="ca-pub-9482818665347681"
                        data-ad-slot="6035410401"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                    <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    </script>
                </div>
            </div>
        </>
    );
}
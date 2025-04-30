import React from 'react';
import Instagram from "/src/assets/images/instagram.png";
import XImg from "/src/assets/images/x.png";
import Youtube from "/src/assets/images/youtube.png";
import Twitch from "/src/assets/images/twitch.png";
import LinkImage from "/src/components/Link/Image";
import "../module.css";
import LogoImage from "/src/components/Logo/Images";
import Subtitle from '/src/components/HTag/SubTitle';

export default function SocialFooter() {
    return (
        <>
            <div className="social ml40">
                <div className="left w100 mt30">
                    <LogoImage></LogoImage>
                </div>
                <div className="left mt10">
                    <div className="left w100 mt10 color-copyright">Legacy Catalan Tournaments Stats</div>
                    <div className="left w100 mt10 color-copyright">Website to keep alive the memory of the tournaments in our area</div>
                    <div className="left w100 mt10">
                        <Subtitle title="Follow us" />
                    </div>
                </div>
                <div className="left w100 links mb15">
                    <LinkImage url="https://www.instagram.com/legacy.cat/" img={Instagram} />
                    <LinkImage className="ml15" url="https://x.com/Lliga_Legacy" img={XImg} />
                    <LinkImage className="ml15" url="https://www.youtube.com/@catmagiclegacy" img={Youtube} />
                    <LinkImage className="ml15" url="https://www.twitch.tv/catmagiclegacy" img={Twitch} />         
                </div>           
            </div>
        </>
    );
}
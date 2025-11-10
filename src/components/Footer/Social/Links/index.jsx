import Instagram from "/src/assets/images/instagram.png";
import XImg from "/src/assets/images/x.png";
import Youtube from "/src/assets/images/youtube.png";
import Twitch from "/src/assets/images/twitch.png";
import LinkImage from "/src/components/Link/Image";

export default function SocialLinksFooter() {
    return (
        <>
            <div className="left w100 links mb15">
                <LinkImage url="https://www.instagram.com/legacy.cat/" img={Instagram} title="instagram legacy.cat" width="30"/>
                <LinkImage className="ml15" url="https://x.com/Lliga_Legacy" img={XImg} title="x legacy.cat" width="30"/>
                <LinkImage className="ml15" url="https://www.youtube.com/@catmagiclegacy" img={Youtube} title="catmagiclegacy youtube channel" width="30"/>
                <LinkImage className="ml15" url="https://www.twitch.tv/catmagiclegacy" img={Twitch} title="catmagiclegacy twitch channel" width="30"/>
            </div>
        </>
    );
}
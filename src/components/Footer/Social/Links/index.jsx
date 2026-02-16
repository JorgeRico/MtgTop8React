import Instagram from "/src/assets/images/instagram.png";
import XImg from "/src/assets/images/x.png";
import Youtube from "/src/assets/images/youtube.png";
import Twitch from "/src/assets/images/twitch.png";
import LinkImage from "/src/components/Link/Image";
import { useTranslation } from 'react-i18next';

export default function SocialLinksFooter() {
    const { t } = useTranslation();
    
    return (
        <>
            <section className="left w100 links">
                <LinkImage url="https://www.instagram.com/legacy.cat/" img={Instagram} title={t('check on instagram - mtg - legacy.cat')} width="32"/>
                <LinkImage className="ml15" url="https://x.com/Lliga_Legacy" img={XImg} title={t('check on x - mtg - legacy.cat')} width="32"/>
                <LinkImage className="ml15" url="https://www.youtube.com/@catmagiclegacy" img={Youtube} title={t('check on youtube channel - mtg - catmagiclegacy')} width="32"/>
                <LinkImage className="ml15" url="https://www.twitch.tv/catmagiclegacy" img={Twitch} title={t('check on twitch channel - mtg - catmagiclegacy')} width="32"/>
            </section>
        </>
    );
}
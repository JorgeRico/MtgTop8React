import HeaderLogo from "/src/components/Header/Logo";
import RightBlock from "/src/components/Header/RightBlock";
import Mail from "/src/assets/images/mail.png";
import Cards from "/src/assets/images/cards.png";
import endpoints from "/src/services/endpoints.jsx";
// import Language from "/src/components/Language";
import { useTranslation } from 'react-i18next';

export default function Header({ classNameStyles }) {
    const { t } = useTranslation();

    return (
        <>
            <section className={classNameStyles}>
                <article className="left w100 overflowHidden header">
                    <HeaderLogo></HeaderLogo>
                    {/* <Language></Language> */}
                    <RightBlock image={Mail} text={t('header.Contact us')} endpoint={endpoints.HTTP_CONTACT} styleClasses="mr20"></RightBlock>
                    <RightBlock image={Cards} text={t('header.Decklist')} endpoint={endpoints.HTTP_DECKLIST}></RightBlock>
                </article>
            </section>
            <div className="left w100 topLine"></div>
        </>
    );
}
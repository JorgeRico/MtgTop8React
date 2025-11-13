import HeaderLogo from "/src/components/Header/Logo";
import RightBlock from "/src/components/Header/RightBlock";
import Mail from "/src/assets/images/mail.png";
import Cards from "/src/assets/images/cards.png";
import endpoints from "/src/services/endpoints.js";

export default function Header() {
    return (
        <>
            <section className="left w100 overflowHidden header">
                <HeaderLogo></HeaderLogo>
                <RightBlock image={Mail} text="Contact us" endpoint={endpoints.HTTP_CONTACT}></RightBlock>
                <RightBlock image={Cards} text="Decklist" endpoint={endpoints.HTTP_DECKLIST}></RightBlock>
            </section>
        </>
    );
}
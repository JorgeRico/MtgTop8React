import SocialLogoFooter from '/src/components/Footer/Social/Logo';
import SocialDescriptionFooter from '/src/components/Footer/Social/Description';
import SocialLinksFooter from '/src/components/Footer/Social/Links';

export default function SocialFooter() {
    return (
        <>
            <section className="footer overflowHidden p20 mt40 bg-footer">
                <article className="container">
                    <div className="social ml20 overflowHidden">
                        <SocialLogoFooter></SocialLogoFooter>
                        <SocialDescriptionFooter></SocialDescriptionFooter>
                        <SocialLinksFooter></SocialLinksFooter>
                    </div>
                </article>
            </section>
        </>
    );
}
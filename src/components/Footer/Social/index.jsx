import SocialLogoFooter from '/src/components/Footer/Social/Logo';
import SocialDescriptionFooter from '/src/components/Footer/Social/Description';
import SocialLinksFooter from '/src/components/Footer/Social/Links';
import Language from "/src/components/Language";

export default function SocialFooter() {
    return (
        <>
            <section className="footer overflowHidden mt40 bg-footer">
                <article className="container">
                    <div className="social p20 overflowHidden">
                        <div className="ml20">
                            <SocialLogoFooter></SocialLogoFooter>
                            <SocialDescriptionFooter></SocialDescriptionFooter>
                            <SocialLinksFooter></SocialLinksFooter>
                        </div>
                        <Language></Language>
                    </div>
                </article>
            </section>
        </>
    );
}
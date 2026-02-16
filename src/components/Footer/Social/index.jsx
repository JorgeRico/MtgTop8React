import SocialLogoFooter from '/src/components/Footer/Social/Logo';
import SocialDescriptionFooter from '/src/components/Footer/Social/Description';
import SocialLinksFooter from '/src/components/Footer/Social/Links';
import Language from "/src/components/Language";
import Subtitle from '/src/components/HTag/SubTitle';
import HTag from "/src/components/HTag";

export default function SocialFooter() {
    return (
        <>
            <section className="footer overflowHidden mt40 bg-footer">
                <article className="container">
                    <div className="social-container p20 overflowHidden">
                        <section className="social-item mb20">
                            <div className="padfooter">
                                <SocialLogoFooter></SocialLogoFooter>
                            </div>
                            <div className="padfooter">
                                <SocialDescriptionFooter></SocialDescriptionFooter>
                            </div>
                        </section>
                        <section className="social-item">
                            <div className="padfooter">
                                <Subtitle title="Follow us" />
                                <SocialLinksFooter></SocialLinksFooter>
                            </div>
                            <div className="padfooter">
                                <HTag Tag="p" text="Change language:" className="left w100"></HTag>
                                <div className="left languages">
                                    <Language></Language>
                                </div>
                            </div>                            
                        </section>
                    </div>
                </article>
            </section>
        </>
    );
}
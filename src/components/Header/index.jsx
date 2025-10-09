import HeaderLogo from "/src/components/Header/Logo";
import HeaderContact from "/src/components/Header/Contact";

export default function Header() {
    return (
        <>
            <section className="left w100 overflowHidden header">
                <HeaderLogo></HeaderLogo>
                <HeaderContact></HeaderContact>
            </section>
        </>
    );
}
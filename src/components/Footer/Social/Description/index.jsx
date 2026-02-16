import Subtitle from '/src/components/HTag/SubTitle';

export default function SocialDescriptionFooter() {
    return (
        <>
            <div className="left mt10">
                <div className="left w100 mt10 color-copyright">Magic The Gathering Tournaments Stats</div>
                <div className="left w100 mt10 color-copyright">Legacy Catalan Tournaments</div>
                <div className="left w100 mt10 color-copyright">Explore current leagues, view standings and decks</div>
                <div className="left w100 mt10 color-copyright">Explore past leagues, view standings and decks</div>
                <div className="left w100 mt10 color-copyright">@catmagiclegacy</div>
                <div className="left w100 mt10">
                    <Subtitle title="Follow us" />
                </div>
            </div>
        </>
    );
}
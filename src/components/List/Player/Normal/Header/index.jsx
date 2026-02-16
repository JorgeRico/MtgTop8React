import BlockLine from "/src/components/List/Player/Normal/BlockLine";
import { useTranslation } from 'react-i18next';

export default function TournamentHeaderPlayers() {
    const { t } = useTranslation();
    
    return (
        <>
            <section className="item left mb20 bg-footer border-red overflowHidden playersBoxHeader">
                <BlockLine
                    position = "#"
                    player   = {t('player.Player')}
                    deck     = {t('player.Deck')}
                    isHeader = {true}
                />
            </section>
        </>
    )
}
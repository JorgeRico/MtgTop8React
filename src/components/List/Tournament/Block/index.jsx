import cupIcon from '/src/assets/images/cup.png';
import Button from "/src/components/List/Button";
import { useTranslation } from 'react-i18next';

export default function TournamentItem({ name, description, buttonText }) {
    const { t } = useTranslation();

    return (
        <>
            <div className="left w100 mb10 bg-footer">
                <div className="wAuto padBox overflowHidden border-red">
                    <div className="cupBox border-grey left radius5 bg-red p5 w-25">
                        <img src={cupIcon} width="15" height="14" alt={t('alt-tags.Cup Champion')} className="cupIcon w-15" />
                    </div>
                    <div className="left format wAuto ml25 tournamentDescription">
                        <strong>{name}</strong>
                        <br></br>
                        <span className="left f12 mt5" style={{whiteSpace: 'pre-wrap'}}>
                            {description}
                        </span>
                    </div>
                    <Button buttonText={buttonText}></Button>
                </div>
            </div>
        </>
    )
}
import Button from "/src/components/List/Button";
import { useTranslation } from 'react-i18next';

export default function StatsBox({ text }) {
    const { t } = useTranslation();

    return (
        <>
            <article className="left w100 mb10 bg-footer">
                <div className="wAuto overflowHidden border-red">
                    <div className="left wAuto paddingStatsBox f14">
                        <strong>{text}</strong>
                    </div>
                    <div className="right wAuto p10 statsButton f12">
                        <Button buttonText={t('stats.View')}></Button>
                    </div>
                </div>
            </article>
        </>
    )
}
import { useTranslation } from 'react-i18next';

export default function TopStatsList({ isPlayer }) {
    const { t } = useTranslation();
    
    const topPlayerStats = () => {
        return (
            <>
                <div className="cardItem overflowHidden bg-red p5 mb10">
                    <span className="left ml25">{t('stats.Total')}</span>
                    <span className="left ml15">{t('stats.Name')}</span>
                </div>
            </>
        )
    }

    const topCardStats = () => {
        return (
            <>
                <div className="cardItem overflowHidden bg-red p5 mb10">
                    <span className="left ml15 w-15">&nbsp;</span>
                    <span className="left ml15">{t('Total')}</span>
                    <span className="left ml15">{t('stats.Name')}</span>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="left w100">
                {isPlayer === true ? (
                        topPlayerStats()
                    ) : (
                        topCardStats()
                    )
                }
            </div>
        </>
    )
}
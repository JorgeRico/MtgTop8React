import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function HeaderRightBlock({ image, text, endpoint, styleClasses = '' }) {
    const { t } = useTranslation();

    return (
        <>
            <div className={`${styleClasses} right p20 mt30 pointer`}>
                <Link to={endpoint}>
                    <div className="left">
                        <img src={image} alt={`${text} - ${t('header.mtg legacy')}`} className="send invertColor" width="25" height="25" />
                    </div>
                    <div className="left ml10 headerRight">
                        {text}
                    </div>
                </Link>
            </div>
        </>
    );
}
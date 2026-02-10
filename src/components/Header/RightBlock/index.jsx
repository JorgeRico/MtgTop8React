import { Link } from 'react-router-dom';

export default function HeaderRightBlock({ image, text, endpoint }) {
    return (
        <>
            <div className="right p20 mt30 pointer">
                <Link to={endpoint}>
                    <div className="left">
                        <img src={image} alt={text + " - mtg legacy"} className="send invertColor" width="25" height="25" />
                    </div>
                    <div className="left ml10 headerRight">
                            {text}
                    </div>
                </Link>
            </div>
        </>
    );
}
import { Link } from 'react-router-dom';

export default function HeaderRightBlock(props) {
    const { image, text, endpoint } = props;

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
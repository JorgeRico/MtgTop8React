import { Link } from 'react-router-dom';

export default function LinkImage({url, className, img}) {

    return (
        <Link to={url} className={className}>
            <img src={img} alt="" />
        </Link>
    );
}




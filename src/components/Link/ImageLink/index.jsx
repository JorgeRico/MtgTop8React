import { Link } from 'react-router-dom';

export default function LinkImage(props) {

    return (
        <Link to={props.url} className={props.className}>
            <img src={props.img} alt="" />
        </Link>
    );
}




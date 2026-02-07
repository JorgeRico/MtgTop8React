import { Link } from 'react-router-dom';

export default function LinkImage(props) {
    return (
        <Link to={props.url} className={props.className} target="_blank" rel="noopener noreferrer" title={props.title}>
            <img src={props.img} alt={props.title} title={props.title} width={props.width} height={props.width}/>
        </Link>
    );
}




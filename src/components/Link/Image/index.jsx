import { Link } from 'react-router-dom';

export default function LinkImage({url, className, title, img, width}) {    
    return (
        <Link to={url} className={className} target="_blank" rel="noopener noreferrer" title={title}>
            <img src={img} alt={title} title={title} width={width} height={width}/>
        </Link>
    );
}




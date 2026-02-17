import { Link } from 'react-router-dom';

function TitleLinkItemBreadcrumb({ endpoint, title }) {
    return (
        <>
            <div className="left ml5">
                <Link to={endpoint}>
                    {title}
                </Link>
            </div>
        </>
    );
}

export default TitleLinkItemBreadcrumb;
import { Link } from 'react-router-dom';

function TitleLinkItemBreadcrumb({ endpoint, title }) {
    return (
        <>
            <div className="left ml10">
                <Link to={endpoint}>
                    {title}
                </Link>
            </div>
        </>
    );
}

export default TitleLinkItemBreadcrumb;
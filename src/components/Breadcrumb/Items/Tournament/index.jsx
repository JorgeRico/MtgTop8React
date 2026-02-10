import { Link } from 'react-router-dom';

function TournamentItemBreadcrumb({ endpoint }) {
    return (
        <>
            <div className="left ml10">
                <Link to={endpoint}>
                    Tournaments
                </Link>
            </div>
        </>
    );
}

export default TournamentItemBreadcrumb;
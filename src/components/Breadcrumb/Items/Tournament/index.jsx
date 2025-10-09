import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function TournamentItemBreadcrumb(props) {
    const { endpoint } = props; 
   
    TournamentItemBreadcrumb.propTypes = {
        endpoint: PropTypes.string
    };

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
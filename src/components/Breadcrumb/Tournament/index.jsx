import PropTypes from 'prop-types';
import HomeItemBreadcrumb from "/src/components/Breadcrumb/Items/Home";
import TitleItemBreadcrumb from "/src/components/Breadcrumb/Items/Title";
import DashItemBreadcrumb from "/src/components/Breadcrumb/Items/Dash";
import TournamentItemBreadcrumb from "/src/components/Breadcrumb/Items/Tournament";

function BreadcrumbTournament(props) {
    const { title, endpoint } = props; 
   
    BreadcrumbTournament.propTypes = {
        title    : PropTypes.string,
        endpoint : PropTypes.string,
    };
                    
    return (
        <>
            <HomeItemBreadcrumb></HomeItemBreadcrumb>
            <DashItemBreadcrumb></DashItemBreadcrumb>
            <TournamentItemBreadcrumb endpoint={endpoint}></TournamentItemBreadcrumb>
            <DashItemBreadcrumb></DashItemBreadcrumb>
            <TitleItemBreadcrumb title={title}></TitleItemBreadcrumb>
        </>
    );
}

export default BreadcrumbTournament;
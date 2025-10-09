import PropTypes from 'prop-types';
import HomeItemBreadcrumb from "/src/components/Breadcrumb/Items/Home";
import TitleItemBreadcrumb from "/src/components/Breadcrumb/Items/Title";
import DashItemBreadcrumb from "/src/components/Breadcrumb/Items/Dash";

function BreadcrumbLeague(props) {
    const { title } = props; 
   
    BreadcrumbLeague.propTypes = {
        title : PropTypes.string,
    };

    return (
        <>
            <HomeItemBreadcrumb></HomeItemBreadcrumb>
            <DashItemBreadcrumb></DashItemBreadcrumb>
            <TitleItemBreadcrumb title={title}></TitleItemBreadcrumb>
        </>
    );
}

export default BreadcrumbLeague;
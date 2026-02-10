import HomeItemBreadcrumb from "/src/components/Breadcrumb/Items/Home";
import TitleItemBreadcrumb from "/src/components/Breadcrumb/Items/Title";
import DashItemBreadcrumb from "/src/components/Breadcrumb/Items/Dash";
import TournamentItemBreadcrumb from "/src/components/Breadcrumb/Items/Tournament";

function BreadcrumbTournament({ title, endpoint }) {                    
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
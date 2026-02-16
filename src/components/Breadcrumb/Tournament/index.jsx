import HomeItemBreadcrumb from "/src/components/Breadcrumb/Items/Home";
import TitleItemBreadcrumb from "/src/components/Breadcrumb/Items/Title";
import DashItemBreadcrumb from "/src/components/Breadcrumb/Items/Dash";
import TitleLinkItemBreadcrumb from "/src/components/Breadcrumb/Items/TitleLink";

function BreadcrumbTournament({ title, date, endpoint }) {         
    return (
        <>
            <HomeItemBreadcrumb></HomeItemBreadcrumb>
            <DashItemBreadcrumb></DashItemBreadcrumb>
            <TitleItemBreadcrumb title="league"></TitleItemBreadcrumb>
            <DashItemBreadcrumb></DashItemBreadcrumb>
            <TitleLinkItemBreadcrumb title={title} endpoint={endpoint}></TitleLinkItemBreadcrumb>
            <DashItemBreadcrumb></DashItemBreadcrumb>
            <TitleItemBreadcrumb title="tournament"></TitleItemBreadcrumb>
            <DashItemBreadcrumb></DashItemBreadcrumb>
            <TitleItemBreadcrumb title={date}></TitleItemBreadcrumb>
        </>
    );
}

export default BreadcrumbTournament;
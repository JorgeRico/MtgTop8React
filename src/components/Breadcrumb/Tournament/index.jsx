import HomeItemBreadcrumb from "/src/components/Breadcrumb/Items/Home";
import TitleItemBreadcrumb from "/src/components/Breadcrumb/Items/Title";
import DashItemBreadcrumb from "/src/components/Breadcrumb/Items/Dash";
import TitleLinkItemBreadcrumb from "/src/components/Breadcrumb/Items/TitleLink";
import { useTranslation } from 'react-i18next';

function BreadcrumbTournament({ title, date, endpoint }) {     
    const { t } = useTranslation();
    
    return (
        <>
            <HomeItemBreadcrumb></HomeItemBreadcrumb>
            <DashItemBreadcrumb></DashItemBreadcrumb>
            <TitleItemBreadcrumb title={t('header.breadcrumb.league')}></TitleItemBreadcrumb>
            <DashItemBreadcrumb></DashItemBreadcrumb>
            <TitleLinkItemBreadcrumb title={title} endpoint={endpoint}></TitleLinkItemBreadcrumb>
            <DashItemBreadcrumb></DashItemBreadcrumb>
            <TitleItemBreadcrumb title={t('header.breadcrumb.tournament')}></TitleItemBreadcrumb>
            <DashItemBreadcrumb></DashItemBreadcrumb>
            <TitleItemBreadcrumb title={date}></TitleItemBreadcrumb>
        </>
    );
}

export default BreadcrumbTournament;
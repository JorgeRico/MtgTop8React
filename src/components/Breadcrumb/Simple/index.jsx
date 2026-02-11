import HomeItemBreadcrumb from "/src/components/Breadcrumb/Items/Home";
import TitleItemBreadcrumb from "/src/components/Breadcrumb/Items/Title";
import DashItemBreadcrumb from "/src/components/Breadcrumb/Items/Dash";

function SimpleBreadcrumb({ title = null, isHome = false }) {                    
    return (
        <>
            <section className="left w100 f14 mb40">
                {!isHome &&
                    <> 
                        <HomeItemBreadcrumb></HomeItemBreadcrumb>
                        <DashItemBreadcrumb></DashItemBreadcrumb>
                        <TitleItemBreadcrumb title={title}></TitleItemBreadcrumb>
                    </>
                }
            </section>
        </>
    );
}

export default SimpleBreadcrumb;
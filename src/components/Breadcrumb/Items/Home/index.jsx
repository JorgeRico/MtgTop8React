import HomeIcon from "/src/assets/images/home.webp";
import ImageLink from "/src/components/Link/ImageLink";
import endpoints from "/src/services/endpoints.jsx";
import "./module.css";

function HomeItemBreadcrumb() {

    return (
        <>
            <div className="left homeIcon">
                <ImageLink url={endpoints.API_HOME} img={HomeIcon} className="invertColor" />
            </div>
        </>
    );
}

export default HomeItemBreadcrumb;
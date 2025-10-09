import HomeIcon from "/src/assets/images/home.png";
import ImageLink from "/src/components/Link/ImageLink";
import endpoints from "/src/services/endpoints.js";
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
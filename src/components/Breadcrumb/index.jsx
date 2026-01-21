import BreadcrumbLeague from "/src/components/Breadcrumb/League";
import BreadcrumbTournament from "/src/components/Breadcrumb/Tournament";

function Breadcrumb(props) {
    const { title, loading, isLeague, endpoint } = props; 

    const league = () => {
        return (
            <BreadcrumbLeague title={title}></BreadcrumbLeague>
        )
    }

    const tournament = () => {
        return (
            <BreadcrumbTournament title={title} endpoint={endpoint}></BreadcrumbTournament>
        )
    }

    return (
        <>
            <section className={`left w100 f14 ${loading === false ? 'blink blured' : ''}`}>
                {isLeague ? league() : tournament() }
            </section>
        </>
    );
}

export default Breadcrumb;
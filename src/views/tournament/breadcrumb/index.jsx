import React from "react";
import endpoints from "/src/services/endpoints.js";
import BluredBreadcrumb from "/src/components/Blured/Breadcrumb";
import BreadcrumbTournament from "components/Breadcrumb/Tournament";

function TournamentBreadcrumb(props) {
    const { tournamentName, tournamentIdLeague, showTournament } = props;

    return (
        <>
            {showTournament === false ? (
                <BluredBreadcrumb></BluredBreadcrumb>
            ) : (
                <>
                    <BreadcrumbTournament title={tournamentName} endpoint={endpoints.API_LEAGUE + tournamentIdLeague}></BreadcrumbTournament>
                </>
            )}
        </>
    )
}

export default TournamentBreadcrumb;
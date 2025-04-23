import React from "react";
import Title from "/src/components/HTag/Title";

function League(props) {
    const { breadcrumb, tournament, stats, title } = props;

    return (
        <>
            <div className="left w100 pb10 mb10 f14">
                {breadcrumb}
            </div>
            <div className="left w100 mt20">
                {tournament}
                <div className="left w100 mt30">
                    <Title title={title} />
                </div>
                <div className="left w100 mt10">
                    {stats}
                </div>
            </div>
        </>
    );
}

export default League;
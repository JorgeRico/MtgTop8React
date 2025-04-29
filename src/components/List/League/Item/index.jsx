import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useApi } from '/src/hooks/use-api.js';

export default function LeagueList(props) {
    const { url, item } = props;
    const api           = useApi();

    LeagueList.propTypes = {
        url   : PropTypes.string,
        item : PropTypes.array
    };

    return (
        <>
            <div className="listItem pointer title mb15 pb10 overflowHidden">
                <Link to={url + item.id}>
                    <div className="left line w100 mb10 description">
                        <div className="left format">
                            <div className="circle orangeCircle"></div>
                            {api.getFormat(item.isLegacy)}
                        </div>
                        <div className="left ml15 separator">
                            | 
                        </div>
                        <div className="left ml15 name">
                            {item.name}
                        </div>
                        <div className="left ml15">
                            |
                        </div>
                        <div className="left ml25 color-selected f14">
                            view league
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
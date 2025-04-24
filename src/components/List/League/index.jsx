import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useApi } from '/src/hooks/use-api.js';

export default function LeagueList(props) {
    const { url, items }                  = props;
    const effectRan                       = useRef(false);
    const [ renderItems, setRenderItems ] = useState(null);
    const api                             = useApi();

    LeagueList.propTypes = {
        url   : PropTypes.string,
        items : PropTypes.array
    };

    const leagueItem = (item) => {
        return (
            <>
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
            </>
        )
    }

    useEffect(() => {
        if (!effectRan.current) {
            setRenderItems(items?.map((item) => (
                <div key={uuidv4()} className="listItem pointer title mb15 pb10 overflowHidden">
                    <Link to={url + item.id}>
                        {leagueItem(item)}
                    </Link>
                </div>
            )));
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="left w100 overflowHidden">
                {(items.length > 0) && (
                    renderItems
                )}
            </div>
        </>
    )
}
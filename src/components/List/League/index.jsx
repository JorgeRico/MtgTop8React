import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function LeagueList(props) {
    const { url, items }                  = props;
    const effectRan                       = useRef(false);
    const [ renderItems, setRenderItems ] = useState(null)

    LeagueList.propTypes = {
        url   : PropTypes.string,
        items : PropTypes.array
    };

    const leagueItem = (name) => {
        return (
            <>
                <div className="left line w100 mb10 description">
                    <div className="left format">
                        <div className="circle orangeCircle"></div>
                        Legacy
                    </div>
                    <div className="left ml15 separator">
                        | 
                    </div>
                    <div className="left ml15 name">
                        {name}
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
                        {leagueItem(item.name)}
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
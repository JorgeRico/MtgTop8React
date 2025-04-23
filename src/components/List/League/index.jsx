import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function StatsCardLink(props) {
    const { url, items }                  = props;
    const effectRan                       = useRef(false);
    const [ renderItems, setRenderItems ] = useState(null)

    StatsCardLink.propTypes = {
        url   : PropTypes.string,
        items : PropTypes.array
    };

    useEffect(() => {
        if (!effectRan.current) {
            setRenderItems(items?.map((item) => (
                <div key={uuidv4()} className="leagueListItem listItem pointer title mb15 pb10 overflowHidden">
                    <Link to={url + item.id}>
                        <div className="left line w100 mb10">
                            <div className="circle orangeCircle"></div>
                            {item.name}
                        </div>
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
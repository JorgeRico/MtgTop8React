import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import LeagueItem from "/src/components/List/Normal/League/Item";

export default function LeagueList(props) {
    const { url, items }                  = props;
    const effectRan                       = useRef(false);
    const [ renderItems, setRenderItems ] = useState(null);

    LeagueList.propTypes = {
        url   : PropTypes.string,
        items : PropTypes.array
    };

    useEffect(() => {
        if (!effectRan.current) {
            setRenderItems(items?.map((item) => (
                <LeagueItem key={uuidv4()} url={url} item={item}></LeagueItem>
            )));
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="left w100 overflowHidden mb30">
                {(items.length > 0) && (
                    renderItems
                )}
            </div>
        </>
    )
}
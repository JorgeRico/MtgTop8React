import React from "react";
import Settings from "/src/assets/images/settings.png";
import { v4 as uuidv4 } from "uuid";

export default function StatsCardBluredLink(props) {
    const { items } = props;

    const listItems = items.map(item =>
        <li key={uuidv4()} className="listItem pointer title blured">
            <div className="left line">
                {item.name} - {item.date}
            </div>
            <div className="right">
                <img src={Settings} alt="" className="invertColor settings absolute"/>
            </div>
        </li>
    );

    return (
        <>
            <ul className="blink ml15">
                {listItems}
            </ul>
        </>
    )
}
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./module.css"
import Header from "/src/components/List/Stats/Block/Header";
import Content from "/src/components/List/Stats/Block/Content";

export default function StatsList(props) {
    const { items, isPlayer, text }       = props;
    const [ renderItems, setRenderItems ] = useState(null)

    useEffect(() => {
        setRenderItems(items?.map((item) => (
            <Content item={item} isPlayer={isPlayer} text={text} key={uuidv4()} />
        )));
    }, []);

    return (
        <>
            <Header isPlayer={isPlayer} />
            {(items.length > 0) && (
                renderItems
            )}
        </>
    )
}
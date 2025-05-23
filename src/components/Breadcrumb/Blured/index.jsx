import React from "react";
import ImageLink from "/src/components/Link/ImageLink";
import HomeIcon from "/src/assets/images/home.png";
import { Link } from 'react-router-dom';

export default function BluredBreadcrumb() {

    return (
        <>
            <div className="left w100 pb10 mt20 f14 blink blured">
                <div className="left homeIcon">
                    <ImageLink url="#" img={HomeIcon} className="backLink invertColor" />
                </div>
                <div className="left ml5">/</div>
                <div className="left ml10">
                    <Link to="#">
                        Tournaments
                    </Link>
                </div>
                <div className="left ml10">/</div>
                <div className="left ml10">
                    Demo Fake text
                </div>
            </div>
        </>
    )
}
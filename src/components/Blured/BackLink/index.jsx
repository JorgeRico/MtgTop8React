import React from "react";
import HTag from "/src/components/HTag";
import ImageNoBlankLink from "/src/components/Link/ImageNoBlankLink";
import BackImg from "/src/assets/images/back.png";

export default function BackLink() {

    return (
        <>
            <div className="fakeTitle blink">
                <div className="left w100 titleSection blured">
                    <div className="left">                    
                        <ImageNoBlankLink url="#" img={BackImg} className="backLink invertColor" />
                    </div>
                    <div className="left">
                        <HTag Tag="h1" text="Demo text" />
                    </div>
                </div>
            </div>
        </>
    )
}
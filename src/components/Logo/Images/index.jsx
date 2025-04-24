import React from 'react';
import Logos from "/src/assets/images/logos.png";

export default function LogoImage() {
    return (
        <>
            <img src={Logos} alt="mtg stats" className="f24 logos invertColor" />
        </>
    );
}
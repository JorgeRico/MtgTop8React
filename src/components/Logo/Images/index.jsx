import React from 'react';
import Logos from "/src/assets/images/logos.png";

export default function LogoImage() {
    return (
        <>
            <img src={Logos} width="100" height="17" alt="mtg stats" className="f24 logos invertColor" />
        </>
    );
}
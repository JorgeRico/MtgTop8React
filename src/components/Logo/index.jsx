import React from 'react';
import Logos from "/src/assets/images/logos.png";
import HTag from "/src/components/HTag";
import { Link } from 'react-router-dom';
import "./module.css";

export default function Logo() {
    return (
        <>
            <Link to="../">
                <HTag Tag="h1" className="logoText" text="Stats" />
                <img src={Logos} alt="" className="logos invertColor" />
            </Link>
        </>
    );
}
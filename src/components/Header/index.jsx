import React from 'react';
import Logos from "/src/assets/images/logos.png";
import HTag from "/src/components/HTag";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="left ml15">
                    <Link to="../">
                        <HTag Tag="h1" text="Stats" />
                        <img src={Logos} alt="" className="logos invertColor" />
                    </Link>
                </div>
            </div>
        </>
    );
}
import React from 'react';
import Logos from "/src/assets/images/logos.png";
import Title from "/src/components/HTag/Title";
import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <>
            <Link to="../">
                <Title title="Stats" />
                <img src={Logos} alt="mtg stats" className="f24 logos invertColor" />
            </Link>
        </>
    );
}
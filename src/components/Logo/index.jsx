import React from 'react';
import Title from "/src/components/HTag/Title";
import { Link } from 'react-router-dom';
import LogoImage from "/src/components/Logo/Images";

export default function Logo() {
    return (
        <>
            <Link to="../">
                <Title title="Stats" />
                <LogoImage />
            </Link>
        </>
    );
}
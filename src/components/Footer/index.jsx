import React from 'react';
import "./module.css";
import CopyrightFooter from "/src/components/Footer/Copyright";
import SocialFooter from "/src/components/Footer/Social";

export default function Footer() {
    return (
        <>
            <SocialFooter></SocialFooter>
            <CopyrightFooter></CopyrightFooter>
        </>
    );
}
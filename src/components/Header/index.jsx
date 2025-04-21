import React from 'react';
import Logo from "/src/components/Logo";

export default function Header() {
    return (
        <>
            <div className="header overflowHidden left p20 w100">
                <div className="left ml10">
                    <Logo></Logo>
                </div>
            </div>
        </>
    );
}
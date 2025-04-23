import React from 'react';
import Logo from "/src/components/Logo";

export default function Header() {
    return (
        <>
            <div className="left w100 overflowHidden p20 header">
                <div className="left">
                    <Logo></Logo>
                </div>
            </div>
        </>
    );
}
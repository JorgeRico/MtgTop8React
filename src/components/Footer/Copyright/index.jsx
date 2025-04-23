import React from 'react';
import "./../module.css";

export default function CopyrightFooter() {
    return (
        <>
            <div className="copyright left w100 f10">
                <div className="container">
                    <div className="message mt10 center color-copyright">
                        The literal and graphical information presented on this site about Magic: The Gathering, including card images and mana symbols, is copyright Wizards of the Coast, LLC. Scryfall is not produced by or endorsed by Wizards of the Coast.
                    </div>
                </div>
            </div>
        </>
    );
}
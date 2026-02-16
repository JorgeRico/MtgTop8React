import { useTranslation } from "react-i18next";
import "./module.css";
import { useRef } from 'react';

const languages = [
    { 
        code: "en", 
        name: "English"
    },
    { 
        code: "es", 
        name: "Español"
    },
    { 
        code: "cat", 
        name: "Català"
    },
];

function LanguageSwitcher() {
    const { i18n }         = useTranslation();
    const langContainerRef = useRef(null);

    const handleClickButton = () => {
        const element = langContainerRef;
        element.current.classList.toggle('none');
    };

    const changeLanguage = (languageCode) => {
        const element = langContainerRef;
        i18n.changeLanguage(languageCode);
        element.current.classList.toggle('none');
    };

    const getLangInfo = (lang) => {
        return languages.filter((list) => lang === list.code).map(el => {
            return el.name
        })
    }

    return (
        <>
            <div className="" >
                <div className="languageBox">
                    <button className="bg-footer" onClick={() => handleClickButton()}>
                        <span className="uppercase">{i18n.language}</span>
                        <span> - </span>
                        <span>{getLangInfo(i18n.language)}</span>
                    </button>
                </div>
                <div className="languageBox bg-footer none mt10" ref={langContainerRef}>
                    {languages.map((lang) => (
                        <button
                            className={`${i18n.language === lang.code && "selected"}`}
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                        >
                            <span className="uppercase">{lang.code}</span>
                            <span> - </span>
                            <span>{lang.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

export default LanguageSwitcher;
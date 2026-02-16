import { useTranslation } from "react-i18next";
import "./module.css";

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
    const { i18n } = useTranslation();

    const handleClickButton = () => {
        const element = document.querySelector('#dropdown');
        element.classList.toggle('none');
    };

    const changeLanguage = (languageCode) => {
        const element = document.querySelector('#dropdown');
        i18n.changeLanguage(languageCode);
        element.classList.toggle('none');
    };

    const getLangInfo = (lang) => {
        return languages.filter((list) => lang === list.code).map(el => {
            return el.name
        })
    }

    return (
        <>
            <div className="right mt10">
                <div className="languageBox">
                    <button className="bg-footer" onClick={() => handleClickButton()}>
                        <span style={{textTransform: 'uppercase'}}>{i18n.language}</span>
                        <span> - </span>
                        <span>{getLangInfo(i18n.language)}</span>
                    </button>
                </div>
                <div className="languageBox none" id="dropdown" style={{gap: "5px"}}>
                    {languages.map((lang) => (
                        <button
                            className="bg-footer"
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            style={{
                                background: i18n.language === lang.code && "var(--background-even)",
                            }}
                        >
                            <span style={{textTransform: 'uppercase'}}>{lang.code}</span>
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
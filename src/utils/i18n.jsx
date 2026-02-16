import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en/translation";
import esTranslations from "./locales/es/translation";
import catTranslations from "./locales/cat/translation";

const resources = {
    // English translations
    ...enTranslations,
    // Spanish translations
    ...esTranslations,
    // French translations
    ...catTranslations,
};

// Initialize i18next
// .use(LanguageDetector) // Detect user language
i18n.use(initReactI18next) // Pass to react-i18next
    .init({
        resources,
        fallbackLng: "en", // Default language if detection fails

        interpolation: {
            escapeValue: false,

            // Custom formatter for dates and currencies
            format: (value, format, lng) => {
                // if (format === "currency") {
                //     return new Intl.NumberFormat(lng, {
                //         style: "currency",
                //         currency: lng === "en" ? "USD" : lng === "es" ? "EUR" : "EUR",
                //     }).format(value);
                // }

                if (format === "date") {
                    return new Intl.DateTimeFormat(lng, {
                        year  : "numeric",
                        month : "long",
                        day   : "numeric",
                    }).format(value);
                }

                return value;
            },
        },
    }
);

export default i18n;
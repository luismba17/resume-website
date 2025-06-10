import React from "react";
import { useTranslation } from 'react-i18next';

const LanguageToggle: React.FC = () => {
    const { i18n, t } = useTranslation();
    const isEnglish = i18n.language === 'en';

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={() => {
                    const page = document.querySelector("#page-wrapper");
                    page?.classList.add("lang-transition-out");

                    setTimeout(() => {
                        i18n.changeLanguage(isEnglish ? 'es' : 'en');
                        page?.classList.remove("lang-transition-out");
                        page?.classList.add("lang-transition-in");

                        setTimeout(() => {
                            page?.classList.remove("lang-transition-in");
                        }, 400);
                    }, 400);
                }}
                aria-label="Toggle language"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-sky-500 text-white text-sm font-semibold rounded-full shadow-xl hover:opacity-90 transition duration-300 hover:scale-105"
            >
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m6.5 4.5l-1.5 6M7 20l1-4m5 4l1-4m-6-1h6" />
                </svg>
                {isEnglish ? t('switch.lang.es') : t('switch.lang')}
            </button>
        </div>

    );
};

export default LanguageToggle;

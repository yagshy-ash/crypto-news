import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "links":{
                home: 'Home',
                bitcoin: 'Bitcoin',
                etherium: 'Etherium',
            },
            "navbar":{
                subscribe: "Subscribe",
            },
            "heroSection":{
                title: "Welcome to Crypto Chronicle",
                description: "Latest News",
                marketAnalysis: "Market Analysis",
                latestNews: "Latest News"
            }
        },
    },
    tm: {
        translation: {
            "links":{
                home: 'Baş sahypa',
                bitcoin: 'Bitkoin',
                etherium: 'Etherium',
            },
            "navbar":{
                subscribe: "Abuna ýazylyň",
            },
            "heroSection":{
                title: "Crypto Chronicle-a hoş geldiňiz",
                description: "Soňky Täzelikler",
                marketAnalysis: "Bazar Analizleri",
                latestNews: "Iň soňky habarlar"
            }
        },
    },
    ru: {
        translation: {
            "links":{
                home: 'Главная',
                bitcoin: 'Биткойн',
                etherium: 'Эфириум',
            },
            "navbar":{
                subscribe: "Подписаться",
            },
            "heroSection":{
                title: "Добро пожаловать в Crypto Chronicle",
                description: "Последние Новости",
                marketAnalysis: "Анализ Рынка",
                latestNews: "Последние новости"
            }
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
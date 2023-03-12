import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'ua',
        
        interpolation: {
            escapeValue: false
        },

        resources: {
            ua: {
                translation: {
                    startMenu: {
                        startTitle: "Гра на перевірку знань німецьких слів",
                        play: "Грати"
                    },

                    playMenu: {
                        inputPlaceholder: "Введіть загадане слово",
                        win: "Ти впорався! Вибери нове слово"
                    }
                }
            },

            en: {
                translation: {
                    startMenu: {
                        startTitle: "A game to test your knowledge of German words",
                        play: "Play"
                    },

                    playMenu: {
                        inputPlaceholder: "Enter the guess word",
                        win: "You did it! Choose new word"
                    }
                }
            }
        }
    })
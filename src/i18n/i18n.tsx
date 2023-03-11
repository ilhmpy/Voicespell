import { TranslationProvider } from "i18nano";
import { FC } from "i18nano/lib/react";

const translations = {
    'en': () => import("./translations/en.json"),
    'ua': () => import("./translations/ua.json")
};

export const LocalesProvider: FC<{ children: any }> = ({ children }) => {
    return (
        // @ts-ignore: error message
        <TranslationProvider translations={translations}>
            {children}
        </TranslationProvider>  
    )
}
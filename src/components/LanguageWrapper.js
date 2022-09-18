import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import english from "../lang/en.json";
import portuguese from "../lang/pt-BR.json";

export const Context = React.createContext();

let local = navigator.language;
local = "en";
// local = "pt-BR";

const en = "en";
const pt_br = "pt-BR";

let lang;

switch (local) {
    case en:
        lang = english;
        break;

    case pt_br:
        lang = portuguese;
        break;

    default:
        lang = english;
        break;
}

const LanguageWrapper = (props) => {

    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);

    const selectLanguage = (e) => {

        const newLocale = e.target.value;

        setLocale(newLocale);

        switch (newLocale) {
            case en:
                setMessages(english);
                break;

            case pt_br:
                setMessages(portuguese);
                break;

            default:
                setMessages(english);
                break;
        }
    }

    return (
        <Context.Provider value={{ locale, selectLanguage }}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    );
}


export default LanguageWrapper;
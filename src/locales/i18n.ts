import * as i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLanguge from "./languages/en.json";
import vnLanguge from "./languages/vi.json";
import LanguageDetector from "i18next-browser-languagedetector";
import configs from "../configs";
const lastLang = window.localStorage.getItem("lastLang");
const lang = lastLang || configs.DEFAULT_LANGUAGE;
i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translations: enLanguge,
      },
      vn: {
        translations: vnLanguge,
      },
    },
    lng: lang, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLocale from "./languages/en.json";
import vnLocale from "./languages/vi.json";

const resources = {
  en: {
    translation: enLocale,
  },
  vi: {
    translation: vnLocale,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

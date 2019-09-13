import i18n from "i18next";
import XHR from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const options = {
  nsSeparator: false,
  objectNotation: true,
  interpolation: {
    escapeValue: false,
    formatSeparator: ","
  },
  returnObjects: true,
  debug: true,
  lng: "fr",
  fallbackLng: "fr",
  react: {
    wait: true
  }
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(options);

export default i18n;

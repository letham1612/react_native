import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to Phuc Long",
        present: "Presenting",
        drink: "Drinks",
      },
    },
    vi: {
      translation: {
        welcome: "Chào mừng đến với Phúc Long",
        present: "Giới thiệu",
        drink: "Đồ uống",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

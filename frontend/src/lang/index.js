import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationVI from './locales/vi/translation.json';

const resources = {
  en: {
    translationEN,
  },
  vi: {
    translationVI,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallBackLng: 'vi',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

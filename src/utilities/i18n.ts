import {initReactI18next} from './../../node_modules/react-i18next/index.d';
import i18next from 'i18next';
// import english from '../languages/english.json';
// import vietnam from '../languages/vietnam.json';

i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {
    // en: english,
    // vi: vietnam,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;

import { createContext } from "react";

import es from "./locales/es.json";
import en from "./locales/en.json";

export const TRANSLATIONS = { es, en };
export const SUPPORTED_LANGUAGES = Object.keys(TRANSLATIONS);
export const DEFAULT_LANGUAGE = "es";
export const STORAGE_KEY = "language";

export const LanguageContext = createContext({
  language: DEFAULT_LANGUAGE,
  translations: TRANSLATIONS[DEFAULT_LANGUAGE],
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key) => key,
});
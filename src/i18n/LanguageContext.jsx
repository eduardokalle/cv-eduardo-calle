import { useCallback, useEffect, useMemo, useState } from "react";

import {
  DEFAULT_LANGUAGE,
  LanguageContext,
  STORAGE_KEY,
  SUPPORTED_LANGUAGES,
  TRANSLATIONS,
} from "./constants";

const getInitialLanguage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && TRANSLATIONS[stored]) return stored;
  } catch (e) {
    console.error(`Language storage unavailable - Error: ${e.message}`);
  }
  return DEFAULT_LANGUAGE;
};

const interpolateString = (template, values) => {
  if (typeof template !== "string" || !values) return template;
  return template.replace(/\{(\w+)\}/g, (_, key) =>
    values[key] !== undefined ? values[key] : `{${key}}`,
  );
};

const resolveKey = (obj, path) =>
  path.split(".").reduce((acc, segment) => (acc && acc[segment] !== undefined ? acc[segment] : undefined), obj);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(getInitialLanguage);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (e) {
      console.error(`Language storage unavailable - Error: ${e.message}`);
    }
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang) => {
    if (TRANSLATIONS[lang]) setLanguageState(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const idx = SUPPORTED_LANGUAGES.indexOf(prev);
      const next = SUPPORTED_LANGUAGES[(idx + 1) % SUPPORTED_LANGUAGES.length];
      return next;
    });
  }, []);

  const t = useCallback(
    (key, values) => {
      const fromActive = resolveKey(TRANSLATIONS[language], key);
      const value = fromActive !== undefined ? fromActive : resolveKey(TRANSLATIONS[DEFAULT_LANGUAGE], key);
      return interpolateString(value, values);
    },
    [language],
  );

  const value = useMemo(
    () => ({
      language,
      translations: TRANSLATIONS[language],
      setLanguage,
      toggleLanguage,
      t,
    }),
    [language, setLanguage, toggleLanguage, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
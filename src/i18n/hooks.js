import { useContext } from "react";

import { LanguageContext } from "./constants";

export const useLanguage = () => useContext(LanguageContext);

export const useTranslation = () => {
  const { t, language, translations } = useLanguage();
  return { t, language, translations };
};
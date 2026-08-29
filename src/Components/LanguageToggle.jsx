import { useLanguage } from "../i18n";

export const LanguageToggle = () => {
  const { language, toggleLanguage, t } = useLanguage();

  const ariaLabel = t("language.toggleAriaLabel");
  const currentLabel = t("language.currentLanguageAriaLabel");

  return (
    <button
      type="button"
      className="change-language no-print"
      id="language-button"
      onClick={toggleLanguage}
      aria-label={ariaLabel}
      title={ariaLabel}
      aria-pressed="false"
    >
      <span className="language-toggle__icon" aria-hidden="true">
        <i className="bx bx-globe" />
      </span>
      <span className="language-toggle__label" aria-label={currentLabel}>
        {language.toUpperCase()}
      </span>
    </button>
  );
};
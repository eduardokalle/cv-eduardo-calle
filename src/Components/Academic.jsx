import { useTranslation } from "../i18n";

export const Academic = ({ academic }) => {
  const { t } = useTranslation();
  return (
    <section className="academic-experience section" id="education">
      <h2 className="section-title">{t("academic.title")}</h2>
      <div className="education__container bd-grid">
        {academic.map((academy, i) => (
          <Academy key={`${academy.institution}-${i}`} {...academy} />
        ))}
      </div>
    </section>
  );
};

const Academy = ({ career, date, institution }) => {
  return (
    <div className="education__content">
      <div className="education__time">
        <span className="education__rounder"></span>
        <span className="education__line"></span>
      </div>
      <div className="education__data bd-grid">
        <h3 className="education__title">{career}</h3>
        <span className="education__year">{date}</span>
        <span className="education__studies">{institution}</span>
      </div>
    </div>
  );
};
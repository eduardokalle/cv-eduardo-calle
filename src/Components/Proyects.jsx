import { Description } from "./Description";
import { useTranslation } from "../i18n";

export const Proyects = ({ proyects }) => {
  const { t } = useTranslation();
  return (
    <section className="proyects-experience section" id="proyects">
      <h2 className="section-title">{t("proyects.title")}</h2>
      <div className="experience__container bd-grid">
        {proyects.map((proyect, i) => (
          <Proyect key={`${proyect.company}-${i}`} {...proyect} />
        ))}
      </div>
    </section>
  );
};

const Proyect = ({ name, company, period, description }) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">
          {name} - {company}
        </h3>
        <span className="experience__proyect">{period}</span>
        {description.map((desc, i) => <Description key={i} desc={desc} />)}
      </div>
    </div>
  );
};
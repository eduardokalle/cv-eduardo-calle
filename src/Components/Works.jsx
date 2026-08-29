import { Description } from "./Description";
import { useTranslation } from "../i18n";

export const Works = ({ works }) => {
  const { t } = useTranslation();
  return (
    <section className="work-experience section" id="experience">
      <h2 className="section-title">{t("works.title")}</h2>
      <div className="experience__container bd-grid">
        {works.map((work, i) => (
          <Work key={`${work.company}-${i}`} {...work} />
        ))}
      </div>
    </section>
  );
};

const Work = ({ title, period, company, description }) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">{title}</h3>
        <span className="experience__company">
          {period} | {company}
        </span>
        {description.map((desc, i) => <Description key={i} desc={desc} />)}
      </div>
    </div>
  );
};
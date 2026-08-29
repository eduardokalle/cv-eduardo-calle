import { useTranslation } from "../i18n";

export const Skills = ({ technicalSkills, softSkills }) => {
  const { t } = useTranslation();
  return (
    <>
      <section className="technical-skills section" id="skills">
        <h2 className="section-title">{t("skills.technicalLabel")}</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            {technicalSkills.map((skill) => <Skill key={skill} skill={skill} />)}
          </ul>
        </div>
      </section>
      <section className="soft-skills section">
        <h2 className="section-title">{t("skills.softLabel")}</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            {softSkills.map((skill) => <Skill key={skill} skill={skill} />)}
          </ul>
        </div>
      </section>
    </>
  );
};

const Skill = ({ skill }) => (
  <li className="skills__name">
    <span className="skills__circle" /> {skill}
  </li>
);
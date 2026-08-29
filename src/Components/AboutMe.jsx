import { useLanguage } from "../i18n";

export const AboutMe = () => {
  const { t } = useLanguage();
  return (
    <section className="profile section" id="profile">
      <h2 className="section-title">{t("aboutMe.label")}</h2>
      <p className="profile__description">{t("aboutMe.description")}</p>
    </section>
  );
};
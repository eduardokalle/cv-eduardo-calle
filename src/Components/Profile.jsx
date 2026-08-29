import { BoxIcon } from './BoxIcon';
import { Options } from "./Options";
import { WhatsAppButton } from "./WhatsAppButton";
import { useTranslation } from "../i18n";

export const Profile = ({
  name,
  ocupation,
  location,
  email,
  telephone,
  image,
  social,
  isMobileView,
}) => {
  const { t } = useTranslation();
  console.log({ isMobileView })
  return (
    <section className="home section" id="home">
      <Options />
      <div className="home__container bd-grid">
        <div className="home__data bd-grid">
          <img src={image} alt={t("profile.profileImageAlt")} className="home__img" />
          <h1 className="home__title">{name}</h1>
          <h3 className="home__profession">{ocupation}</h3>
          <span className="home__information no-print">
            <i className="bx bx-map home__icon" /> {location}
          </span>
        </div>
        <div className='home__contact bd-grid'>
          <span className="social__link print">
            <i className="bx bx-map social__icon" /> {location}
          </span>
          <div className="home__contact__row">
            <BoxIcon className="home__icon bx-envelope" label={t("profile.sendEmail", { name })} url={`mailto:${email}`} />
            <BoxIcon className="home__icon bx-phone" label={t("profile.callPhone", { name })} url={`tel:${telephone}`} />
            <WhatsAppButton name={name} telephone={telephone} />
            {true && social.map((s) => {
              const key = s.name === "linkedin" ? "social.linkedin" : s.name === "github" ? "social.github" : null;
              return <BoxIcon key={s.name} {...s} label={key ? t(key, { name }) : s.label} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
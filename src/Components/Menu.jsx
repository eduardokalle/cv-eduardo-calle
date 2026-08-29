import { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
import { useTranslation } from "../i18n";

const SECTION_LABEL_KEYS = {
  "#home": "menu.items.home",
  "#profile": "menu.items.profile",
  "#skills": "menu.items.skills",
  "#experience": "menu.items.experience",
  "#education": "menu.items.education",
  "#proyects": "menu.items.proyects",
};

export const Menu = ({ menu }) => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  const _handleActiveSection = (e) => {
    window.location.hash = e.target.hash;
    setShow(!show);
  };

  return (
    <header className="l-header no-print" id="header">
      <Router>
        <nav className="nav bd-container">
          <span className="nav__logo">{t("menu.logo")}</span>
          <div
            className={show ? "nav__menu show-menu" : "nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list">
              {menu.map(({ section, className }) => (
                <li className="nav__item" key={section}>
                  <NavLink
                    className="nav__link"
                    activeClassName="active-link"
                    onClick={_handleActiveSection}
                    to={{ pathname: "/", hash: section }}
                    isActive={(m, l) => (l.hash === section ? true : false)}
                  >
                    <i className={`bx ${className} nav__icon`} /> {t(SECTION_LABEL_KEYS[section])}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => setShow(!show)}
          >
            <i className="bx bx-grid-alt" />
          </div>
        </nav>
      </Router>
    </header>
  );
};
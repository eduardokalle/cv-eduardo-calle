import { useState, useEffect } from "react";

import { Profile } from "../Components/Profile";
import { Academic } from "../Components/Academic";
import { Skills } from "../Components/Skills";
import { Proyects } from "../Components/Proyects";
import { Works } from "../Components/Works";
import { AboutMe } from "../Components/AboutMe";
import { Menu } from "../Components/Menu";
import { SEO } from "../Components/SEO";
import { LanguageProvider, useTranslation } from "../i18n";

import { Data as dataSchema } from '../Schemas/Data';
import { Menu as menuSchema } from '../Schemas/Menu';

const ResumeShell = () => {
  const query = '(min-width: 968px)';
  const [matches, setMatches] = useState(window.matchMedia(query).matches);
  const { translations } = useTranslation();

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches]);

  const { profile, socialMedia } = dataSchema;
  const { skills, experience } = translations;
  return (
    <>
      <SEO  {...profile} description={translations.aboutMe.description} />
      {!matches && <Menu {...menuSchema} />}
      <main className='l-main bd-container' id='bd-container'>
        <div className='resume' id='area-cv'>
          <div className='resume__left'>
            <Profile {...profile} {...socialMedia} isMobileView={!matches} />
            <AboutMe />
            <Skills technicalSkills={skills.technicalSkills} softSkills={skills.softSkills} />
          </div>
          <div className='resume__right'>
            <Works works={experience.works} />
            <Academic academic={experience.academic} />
            <Proyects proyects={experience.proyects} />
          </div>
        </div>
      </main>
    </>
  );
};

export const Resume = () => (
  <LanguageProvider>
    <ResumeShell />
  </LanguageProvider>
);
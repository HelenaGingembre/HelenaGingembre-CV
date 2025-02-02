import Wrapper from './components/Wrapper';
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';
import contacts from './data/contacts.json';
import techSkills from './data/techSkills.json';
import softSkills from './data/softSkills.json';
import language from './data/language.json';
import commandProjects from './data/commandProjects.json';
import ownProjects from './data/ownProjects.json';
import experience from './data/experience.json';
import education from './data/education.json';
import { useState } from 'react';

function App() {
  const [lang, setLang] = useState(true);
  const handleClick = () => {
    setLang(!lang);
  };

  return (
    <Wrapper>
      <Sidebar
        contacts={contacts}
        techSkills={techSkills}
        softSkills={softSkills}
        language={language}
        langCv={lang}
      />

      <AboutMe
        commandProjects={commandProjects}
        ownProjects={ownProjects}
        experience={experience}
        education={education}
        onClick={handleClick}
        langCv={lang}
      />
    </Wrapper>
  );
}

export default App;

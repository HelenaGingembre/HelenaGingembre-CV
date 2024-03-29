import Contacts from '../Contacts';
import TechSkills from '../TechSkills';
import SoftSkills from '../SoftSkills';
import Language from '../Language';
import PropTypes from 'prop-types';
import s from './Sidebar.module.css';
import myPhoto from '../../assets/img/photo.jpg';
import sv from '../../assets/CVFrontend Developer.pdf';

function Sidebar({ contacts, techSkills, softSkills, language }) {
  return (
    <aside className={s.sidebar}>
      <div className={s.section}>
        <img src={myPhoto} alt="Olena Izotova(Gingembre)" className={s.photo} />
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Contacts</h3>
        <ul>
          {contacts.map(({ id, link, text }) => (
            <Contacts key={id} link={link} text={text} />
          ))}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Tech Skills</h3>
        <ul>
          {techSkills.map(({ id, label }) => (
            <TechSkills key={id} label={label} />
          ))}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Soft Skills</h3>
        <ul>
          {softSkills.map(({ id, label }) => (
            <SoftSkills key={id} label={label} />
          ))}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Language</h3>
        <ul>
          {language.map(({ id, label }) => (
            <Language key={id} label={label} />
          ))}
        </ul>
      </div>

      <div className={s.section}>
        <a
          className={s.link}
          href={sv}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Download CV
        </a>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  techSkills: PropTypes.arrayOf(PropTypes.object),
  softSkills: PropTypes.arrayOf(PropTypes.object),
};

export default Sidebar;

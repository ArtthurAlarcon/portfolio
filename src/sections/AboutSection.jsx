import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../i18n/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <SectionHeading index="02" title={t.about.title} />

      <div className="about-grid">
        <div className="about-text">
          {t.about.paragraphs.map((p, idx) => (
            <Reveal
              as="p"
              key={idx}
              delay={idx * 120}
              className={idx === 0 ? "about-lead" : ""}
            >
              {p}
            </Reveal>
          ))}
        </div>

        <div className="about-aside">
          <Reveal className="mini-card" delay={120}>
            <h3>{t.about.languagesTitle}</h3>
            <ul className="lang-list">
              {t.about.languages.map((l) => (
                <li key={l.label}>
                  <div className="lang-row">
                    <strong>{l.label}</strong>
                    <span>{l.level}</span>
                  </div>
                  <span className="meter" aria-hidden="true">
                    <span className="meter-fill" style={{ "--value": `${l.value}%` }} />
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mini-card" delay={220}>
            <h3>{t.about.softSkillsTitle}</h3>
            <ul className="pill-row">
              {t.about.softSkills.map((skill, idx) => (
                <li key={skill} className="pill" style={{ "--i": idx }}>
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

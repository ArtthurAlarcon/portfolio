import Reveal from "./Reveal";
import { useLanguage, localize } from "../i18n/LanguageContext";
import { techCategories } from "../data/techStack";

export default function TechStack({ items = [] }) {
  const { t, lang } = useLanguage();

  return (
    <div className="skill-groups">
      {techCategories.map((category, idx) => {
        const group = items.filter((item) => item.category === category);
        if (!group.length) return null;

        return (
          <Reveal key={category} className="skill-group" delay={(idx % 3) * 80}>
            <h3 className="skill-group-title">
              {t.skills.categories[category]}
              <span className="skill-group-count">{group.length}</span>
            </h3>
            <ul className="tech-grid">
              {group.map((tech) => (
                <li
                  key={localize(tech.name, lang)}
                  className="tech-item"
                  style={tech.color ? { "--brand": tech.color } : undefined}
                >
                  <tech.Icon className="tech-icon" aria-hidden="true" />
                  <span className="tech-name">{localize(tech.name, lang)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        );
      })}
    </div>
  );
}

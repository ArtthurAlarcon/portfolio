import { FiArrowUpRight, FiLock } from "react-icons/fi";
import { useLanguage, localize } from "../i18n/LanguageContext";
import { trackPointer } from "../utils/pointer";
import ProjectStatus from "./ProjectStatus";

export default function ProjectCard({ project, number, onOpen, style }) {
  const { lang, t } = useLanguage();
  const title = localize(project.title, lang);

  return (
    <article
      className={`card project-card spotlight ${project.isOwn ? "is-own" : ""}`}
      onPointerMove={trackPointer}
      style={style}
    >
      <div className="project-card-top">
        <span className="project-number">{number}</span>
        <span className="project-type">{t.projects.filters[project.type]}</span>
        <ProjectStatus project={project} />
        {project.isPrivate && (
          <span className="project-private" title={t.projects.private}>
            <FiLock aria-hidden="true" />
            {t.projects.private}
          </span>
        )}
      </div>

      <h3>
        {/* El ::after del botón cubre toda la tarjeta para hacerla clicable */}
        <button className="project-open" onClick={onOpen}>
          {title}
        </button>
      </h3>
      <p className="project-desc">{localize(project.description, lang)}</p>

      <div className="tag-row">
        {project.tags.map((tag) => {
          const label = localize(tag, lang);
          return (
            <span key={label} className="tag">
              {label}
            </span>
          );
        })}
      </div>

      <span className="project-more" aria-hidden="true">
        {t.projects.details}
        <FiArrowUpRight />
      </span>
    </article>
  );
}

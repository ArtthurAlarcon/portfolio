import { useLanguage, localize } from "../i18n/LanguageContext";

export default function ProjectCard({ project }) {
  const { lang } = useLanguage();
  const title = localize(project.title, lang);

  return (
    <article className="card project-card">
      {/* <div className="project-thumb">
        <img src={project.image} alt={title} />
      </div> */}
      {/* <div className="project-thumb"/> */}

      <div className="card-body">
        <h3>{title}</h3>
        <p>{localize(project.description, lang)}</p>

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

        {/* <div className="card-actions">
          {project.linkUrl ? (
            <a
              className="link-btn"
              href={project.linkUrl}
              target="_blank"
              rel="noreferrer"
            >
              {localize(project.linkText, lang) || "Ver proyecto"}
            </a>
          ) : (
            <span className="muted">{localize(project.linkText, lang)}</span>
          )}
        </div> */}
      </div>
    </article>
  );
}

import { useEffect, useRef } from "react";
import { FiCheck, FiLock, FiX } from "react-icons/fi";
import { useLanguage, localize } from "../i18n/LanguageContext";
import ProjectStatus from "./ProjectStatus";

export default function ProjectModal({ project, number, onClose }) {
  const { lang, t } = useLanguage();
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (project && !dialog.open) dialog.showModal();
  }, [project]);

  const close = () => dialogRef.current?.close();
  const highlights = project && localize(project.highlights, lang);

  return (
    <dialog
      ref={dialogRef}
      className="project-modal"
      onClose={onClose}
      // Clic en el fondo (fuera del contenido) cierra el modal
      onClick={(e) => e.target === e.currentTarget && close()}
      aria-labelledby="project-modal-title"
    >
      {project && (
        <div className="modal-body">
          <button className="icon-btn modal-close" onClick={close} aria-label={t.projects.close}>
            <FiX aria-hidden="true" />
          </button>

          <div className="project-card-top">
            <span className="project-number">{number}</span>
            <span className="project-type">{t.projects.filters[project.type]}</span>
            <ProjectStatus project={project} />
          </div>

          <h3 id="project-modal-title" className="modal-title">
            {localize(project.title, lang)}
          </h3>
          <p className="modal-desc">{localize(project.description, lang)}</p>

          {highlights?.length > 0 && (
            <>
              <h4 className="modal-subtitle">{t.projects.highlightsTitle}</h4>
              <ul className="check-list">
                {highlights.map((item) => (
                  <li key={item}>
                    <FiCheck aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          <h4 className="modal-subtitle">{t.projects.stackTitle}</h4>
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

          {project.isPrivate && project.linkText && (
            <p className="modal-note">
              <FiLock aria-hidden="true" />
              {localize(project.linkText, lang)}
            </p>
          )}
        </div>
      )}
    </dialog>
  );
}

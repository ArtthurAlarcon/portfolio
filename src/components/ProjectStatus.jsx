import { useLanguage } from "../i18n/LanguageContext";

// Insignia de estado del proyecto (por ejemplo, "En desarrollo")
export default function ProjectStatus({ project }) {
  const { t } = useLanguage();
  if (!project.status) return null;

  return (
    <span className="project-status">
      <span className="status-dot" aria-hidden="true" />
      {t.projects[project.status]}
    </span>
  );
}

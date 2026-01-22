export default function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      {/* <div className="project-thumb">
        <img src={project.image} alt={project.title} />
      </div> */}
      {/* <div className="project-thumb"/> */}

      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* <div className="card-actions">
          {project.linkUrl ? (
            <a
              className="link-btn"
              href={project.linkUrl}
              target="_blank"
              rel="noreferrer"
            >
              {project.linkText || "Ver proyecto"}
            </a>
          ) : (
            <span className="muted">{project.linkText}</span>
          )}
        </div> */}
      </div>
    </article>
  );
}

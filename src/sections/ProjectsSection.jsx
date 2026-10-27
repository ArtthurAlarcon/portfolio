import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";
import { useInView } from "../hooks/useInView";
import { useLanguage } from "../i18n/LanguageContext";

const FILTERS = ["All", "Fullstack", "Frontend", "Backend"];
const INITIAL_COUNT = 6;

const byType = (type) =>
  type === "All" ? projects : projects.filter((p) => p.type === type);

// Número fijo por proyecto para que no cambie al filtrar
const numberOf = (project) =>
  String(projects.indexOf(project) + 1).padStart(2, "0");

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(null);
  const [gridRef, gridVisible] = useInView();

  const filtered = byType(filter);
  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);

  const toggleExpanded = () => {
    if (expanded) {
      document.getElementById("projects")?.scrollIntoView({ block: "start" });
    }
    setExpanded(!expanded);
  };

  return (
    <section id="projects" className="section">
      <SectionHeading
        index="01"
        title={t.projects.title}
        subtitle={t.projects.subtitle}
      />

      <Reveal className="filters" role="group" delay={80}>
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`chip ${filter === f ? "chip-active" : ""}`}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {t.projects.filters[f]}
            <span className="chip-count">{byType(f).length}</span>
          </button>
        ))}
      </Reveal>

      {/* La key reinicia la animación de entrada al cambiar de filtro */}
      <div
        ref={gridRef}
        className={`card-grid project-grid ${gridVisible ? "is-visible" : ""}`}
        key={filter}
      >
        {visible.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            number={numberOf(project)}
            onOpen={() => setSelected(project)}
            style={{ "--i": idx % INITIAL_COUNT }}
          />
        ))}
      </div>

      {filtered.length > INITIAL_COUNT && (
        <div className="show-more">
          <button
            className="btn btn-outline"
            onClick={toggleExpanded}
            aria-expanded={expanded}
          >
            {expanded
              ? t.projects.showLess
              : t.projects.showAll.replace("{n}", filtered.length)}
            <FiChevronDown
              className={`chevron ${expanded ? "is-flipped" : ""}`}
              aria-hidden="true"
            />
          </button>
        </div>
      )}

      <ProjectModal
        project={selected}
        number={selected && numberOf(selected)}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}

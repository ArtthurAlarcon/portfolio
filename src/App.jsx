import heroImage from "./assets/me.svg";
import TechStack from "./components/TechStack";
import heroImageWhite from "./assets/me-w.svg";
import { useEffect, useState, useMemo } from "react";
// import heroImage from './assets/hero-portfolio.png'
import { techStack } from "../src/data/techStack";
import ProjectCard from "../src/components/ProjectCard";
import { projects as PROJECTS } from "../src/data/projects";
import ExperienceSection from "../src/sections/ExperienceSection";
import { useLanguage } from "./i18n/LanguageContext";

const SECTIONS = ["home", "projects", "about", "skills", "experience", "contact"];

const FILTERS = ["All", "Fullstack", "Frontend", "Backend"];

function App() {
  const { t, toggleLang } = useLanguage();
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const filteredProjects = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.type === filter);
  }, [filter]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openEmail = () => {
    const b64 = "YXJ0dHVyby5hbGFyY29uQGdtYWlsLmNvbQ=="; // base64
    const email = atob(b64);
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <span className="logo">AA</span>
          <span className="brand">Arturo Alarcón</span>
        </div>

        <nav className="nav">
          {SECTIONS.map((id) => (
            <button
              key={id}
              className="nav-link"
              onClick={() => scrollToSection(id)}
            >
              {t.nav[id]}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle lang-toggle"
            onClick={toggleLang}
            aria-label={t.toggles.langAria}
            title={t.toggles.langAria}
          >
            {t.toggles.lang}
          </button>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={t.toggles.themeAria}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="section hero">
          <div className="hero-text">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>

            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("projects")}
              >
                {t.hero.projectsBtn}
              </button>
              <a
                href={`${import.meta.env.BASE_URL}files/${t.hero.cvFile}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                {t.hero.cvBtn}
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              src={theme === "dark" ? heroImageWhite : heroImage}
              alt="Portfolio hero mockup"
              className="hero-image"
            />
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="projects" className="section">
          <div className="section-header">
            <h2>{t.projects.title}</h2>

            <div className="filters">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  className={`chip ${filter === f ? "chip-active" : ""}`}
                  onClick={() => setFilter(f)}
                >
                  {t.projects.filters[f]}
                </button>
              ))}
            </div>
          </div>

          <div className="card-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* SOBRE MÍ + SKILLS */}
        <section id="about" className="section section-two-col">
          <div>
            <h2>{t.about.title}</h2>
            {t.about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            <div className="about-extras">
              <div className="mini-card">
                <h3>{t.about.languagesTitle}</h3>
                <ul className="mini-list">
                  {t.about.languages.map((l) => (
                    <li key={l.label}>
                      <strong>{l.label}:</strong> {l.level}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mini-card">
                <h3>{t.about.softSkillsTitle}</h3>
                <div className="pill-row">
                  {t.about.softSkills.map((skill) => (
                    <span key={skill} className="pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div id="skills">
            <h2>{t.skills.title}</h2>
            <TechStack items={techStack} />
          </div>
        </section>

        {/* EXPERIENCIA */}
        <ExperienceSection />

        {/* CONTACTO */}
        <section id="contact" className="section section-contact">
          <div className="contact-grid">
            <div className="contact-card">
              <h2>{t.contact.title}</h2>
              <p>{t.contact.text}</p>

              <div className="contact-links">
                <a
                  href="#"
                  className="link-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    openEmail();
                  }}
                >
                  {t.contact.email}
                </a>

                <a
                  href="https://www.linkedin.com/in/luisarturoalarcon/"
                  className="link-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/ArtthurAlarcon"
                  className="link-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="contact-card">
              <h2>{t.contact.availableTitle}</h2>
              <ul className="mini-list">
                {t.contact.available.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h3 style={{ marginTop: 14 }}>{t.contact.locationTitle}</h3>
              <p className="muted">{t.contact.location}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Arturo Alarcón</span>
        <span>{t.footer.madeWith}</span>
      </footer>
    </div>
  );
}

function SkillBar({ label, value }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar-header">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default App;

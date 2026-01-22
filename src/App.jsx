import heroImage from "./assets/me.svg";
import TechStack from "./components/TechStack";
import heroImageWhite from "./assets/me-w.svg";
import { useEffect, useState, useMemo } from "react";
// import heroImage from './assets/hero-portfolio.png'
import { techStack } from "../src/data/techStack";
import ProjectCard from "../src/components/ProjectCard";
import { projects as PROJECTS } from "../src/data/projects";
import ExperienceSection from "../src/sections/ExperienceSection";

const SECTIONS = [
  { id: "home", label: "Inicio" },
  { id: "projects", label: "Proyectos" },
  { id: "about", label: "Sobre mí" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experiencia" },
  { id: "contact", label: "Contacto" },
];

const FILTERS = ["All", "Fullstack", "Frontend", "Backend"];

function App() {
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
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              className="nav-link"
              onClick={() => scrollToSection(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="section hero">
          <div className="hero-text">
            <p className="eyebrow">Full-Stack Developer</p>
            <h1>Hola, soy Arturo Alarcón</h1>
            <p className="hero-subtitle">
              Desarrollador Full-Stack con 5 años de experiencia especializado
              en aplicaciones web como CRM, ERP, SaaS y e-commerce. Me enfoco en
              crear soluciones escalables, optimizadas y listas para producción,
              cuidando tanto la experiencia del usuario como la lógica del
              negocio.
            </p>

            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("projects")}
              >
                Ver proyectos
              </button>
              <a
                className="btn btn-outline"
                href="/files/CV---Luis-Arturo-Alarcon-Blanco-.pdf"
                download
              >
                Descargar CV
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
            <h2>Proyectos Destacados</h2>

            <div className="filters">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  className={`chip ${filter === f ? "chip-active" : ""}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
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
            <h2>Sobre mí</h2>
            <p>
              Soy Desarrollador Full-Stack con 5 años de experiencia creando
              aplicaciones web enfocadas en negocio como CRM, ERP, SaaS y
              e-commerce. Me gusta construir productos completos, desde la
              interfaz hasta la lógica de backend y la base de datos, cuidando
              rendimiento, escalabilidad y buena experiencia de usuario.
            </p>
            <p>
              Disfruto trabajar en proyectos donde se requiere análisis,
              automatización de procesos y desarrollo de soluciones que
              realmente mejoren la operación del día a día.
            </p>

            <div className="about-extras">
              <div className="mini-card">
                <h3>Idiomas</h3>
                <ul className="mini-list">
                  <li>
                    <strong>Español:</strong> Nativo
                  </li>
                  <li>
                    <strong>Inglés:</strong> B2 (Intermedio alto)
                  </li>
                </ul>
              </div>

              <div className="mini-card">
                <h3>Habilidades blandas</h3>
                <div className="pill-row">
                  <span className="pill">Comunicación efectiva</span>
                  <span className="pill">Trabajo en equipo y colaboración</span>
                  <span className="pill">Iniciativa y proactividad</span>
                  <span className="pill">
                    Resolución de problemas complejos
                  </span>
                  <span className="pill">
                    Adaptabilidad a entornos cambiantes
                  </span>
                  <span className="pill">Pensamiento crítico y analítico</span>
                  <span className="pill">
                    Gestión del tiempo y priorización
                  </span>
                  <span className="pill">
                    Orientación a resultados medibles
                  </span>
                  <span className="pill">
                    Aprendizaje continuo y curiosidad
                  </span>
                  <span className="pill">Atención al detalle y precisión</span>
                  <span className="pill">Empatía en entornos técnicos</span>
                  <span className="pill">
                    Organización y planificación estratégica
                  </span>
                  <span className="pill">Autonomía y autogestión</span>
                </div>
              </div>
            </div>
          </div>

          <div id="skills">
            <h2>Habilidades</h2>
            <TechStack items={techStack} />

            {/* <div className="skill-bars">
              <SkillBar label="Frontend" value={90} />
              <SkillBar label="Backend" value={85} />
              <SkillBar label="Bases de datos" value={90} />
              <SkillBar label="DevOps" value={80} />
            </div> */}
          </div>
        </section>

        {/* EXPERIENCIA */}
        <ExperienceSection />

        {/* CONTACTO */}
        <section id="contact" className="section section-contact">
          <div className="contact-grid">
            <div className="contact-card">
              <h2>¿Construimos algo juntos?</h2>
              <p>
                Estoy abierto a nuevas oportunidades y proyectos. Si buscas
                apoyo en desarrollo Full-Stack (CRM, ERP, SaaS, e-commerce o
                APIs), mándame mensaje y lo platicamos.
              </p>

              <div className="contact-links">
                <a
                  href="#"
                  className="link-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    openEmail();
                  }}
                >
                  Contactar por email
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
              <h2>Disponible para</h2>
              <ul className="mini-list">
                <li>Oportunidades Full-Stack/Frontend/Backend</li>
                <li>Freelance por proyecto</li>
                <li>Consultas, mentorias</li>
              </ul>

              <h3 style={{ marginTop: 14 }}>Ubicación</h3>
              <p className="muted">Querétaro y Ciudad de México · Presencial / Remoto / Híbrido</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Arturo Alarcón</span>
        <span>Hecho con React + Vite</span>
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

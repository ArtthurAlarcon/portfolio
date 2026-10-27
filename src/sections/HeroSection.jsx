import { FiArrowDown, FiCpu, FiFileText } from "react-icons/fi";
import { SiNodedotjs, SiReact, SiTypescript } from "react-icons/si";
import heroImage from "../assets/me.svg";
import heroImageWhite from "../assets/me-w.svg";
import Counter from "../components/Counter";
import { projects } from "../data/projects";
import { experience } from "../data/experience";
import { useLanguage } from "../i18n/LanguageContext";
import { resetTilt, tiltPointer, trackPointer } from "../utils/pointer";

export default function HeroSection({ theme }) {
  const { t, lang } = useLanguage();

  const stats = [
    { value: 5, suffix: "+", label: t.hero.stats.years },
    { value: projects.length, label: t.hero.stats.projects },
    { value: experience[lang].length, label: t.hero.stats.companies },
  ];

  const badges = [
    { label: "React", Icon: SiReact },
    { label: "Node.js", Icon: SiNodedotjs },
    { label: "TypeScript", Icon: SiTypescript },
    { label: t.hero.aiBadge, Icon: FiCpu },
  ];

  return (
    <section id="home" className="section hero" onPointerMove={trackPointer}>
      <div className="hero-text">
        <p className="status-badge hero-enter" style={{ "--i": 0 }}>
          <span className="status-dot" aria-hidden="true" />
          {t.hero.status}
        </p>

        <p className="eyebrow hero-enter" style={{ "--i": 1 }}>
          {t.hero.eyebrow}
        </p>

        <h1 className="hero-title hero-enter" style={{ "--i": 2 }}>
          <span className="hero-greeting">{t.hero.greeting}</span>{" "}
          <span className="hero-name">
            {t.hero.name}
            <svg
              className="scribble"
              viewBox="0 0 320 24"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path pathLength="1" d="M3 17 C 70 6, 140 4, 205 10 S 290 19, 317 7" />
            </svg>
          </span>
        </h1>

        <p className="hero-subtitle hero-enter" style={{ "--i": 3 }}>
          {t.hero.subtitle}
        </p>

        <div className="hero-actions hero-enter" style={{ "--i": 4 }}>
          <a href="#projects" className="btn btn-primary">
            {t.hero.projectsBtn}
            <FiArrowDown className="btn-icon-bounce" aria-hidden="true" />
          </a>
          <a
            href={`${import.meta.env.BASE_URL}files/${t.hero.cvFile}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <FiFileText aria-hidden="true" />
            {t.hero.cvBtn}
          </a>
        </div>

        <dl className="hero-stats hero-enter" style={{ "--i": 5 }}>
          {stats.map((stat) => (
            <div key={stat.label} className="stat">
              <dt>{stat.label}</dt>
              <dd>
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero-visual hero-enter" style={{ "--i": 2 }}>
        <div
          className="portrait"
          onPointerMove={tiltPointer}
          onPointerLeave={resetTilt}
        >
          <span className="portrait-ring" aria-hidden="true" />
          <div className="portrait-frame">
            <img
              src={theme === "dark" ? heroImageWhite : heroImage}
              alt={t.hero.portraitAlt}
              className="hero-image"
              width="624"
              height="624"
            />
          </div>

          {badges.map((badge, idx) => (
            <span
              key={badge.label}
              className={`float-badge float-badge-${idx + 1}`}
              aria-hidden="true"
            >
              <badge.Icon />
              {badge.label}
            </span>
          ))}
        </div>
      </div>

      <a href="#projects" className="scroll-cue" aria-label={t.hero.scroll}>
        <span className="scroll-cue-wheel" />
      </a>
    </section>
  );
}

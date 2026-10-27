import { useEffect, useRef, useState } from "react";
import { FiBriefcase, FiChevronDown, FiMapPin } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/experience";
import { useInView } from "../hooks/useInView";
import { useLanguage } from "../i18n/LanguageContext";
import { companyInitials, formatDuration } from "../utils/experience";
import { trackPointer } from "../utils/pointer";

const VISIBLE_BULLETS = 3;

export default function ExperienceSection() {
  const { lang, t } = useLanguage();
  const timelineRef = useRef(null);

  // La línea se va llenando conforme se avanza en la sección
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = timelineRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = (window.innerHeight * 0.6 - rect.top) / rect.height;
      el.style.setProperty("--progress", Math.min(Math.max(progress, 0), 1));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="experience" className="section">
      <SectionHeading
        index="04"
        title={t.experience.title}
        subtitle={t.experience.subtitle}
      />

      <ol className="timeline" ref={timelineRef}>
        <span className="timeline-track" aria-hidden="true">
          <span className="timeline-fill" />
        </span>
        {experience[lang].map((item) => (
          <TimelineItem key={item.id} item={item} t={t} />
        ))}
      </ol>
    </section>
  );
}

function TimelineItem({ item, t }) {
  const [ref, inView] = useInView({ rootMargin: "0px 0px -30% 0px", threshold: 0 });
  const [open, setOpen] = useState(false);
  const shown = item.bullets.slice(0, VISIBLE_BULLETS);
  const extra = item.bullets.slice(VISIBLE_BULLETS);

  return (
    <li ref={ref} className={`timeline-item ${inView ? "is-visible" : ""}`}>
      <div className="timeline-when">
        <span className="timeline-date">{item.date}</span>
        <span className="timeline-duration">
          {formatDuration(item.date, t.experience.units)}
        </span>
      </div>

      <span className="timeline-dot" aria-hidden="true" />

      <article className="card timeline-card spotlight" onPointerMove={trackPointer}>
        <header className="timeline-head">
          <span className="company-mark" aria-hidden="true">
            {companyInitials(item.company)}
          </span>
          <div>
            <h3>{item.role}</h3>
            <p className="timeline-company">{item.company}</p>
          </div>
        </header>

        <div className="meta-row">
          <span className="tag">
            <FiMapPin aria-hidden="true" />
            {item.location}
          </span>
          <span className="tag">
            <FiBriefcase aria-hidden="true" />
            {item.modality}
          </span>
        </div>

        <ul className="list">
          {shown.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>

        {extra.length > 0 && (
          <>
            <div className={`collapse ${open ? "is-open" : ""}`} inert={!open}>
              <ul className="list">
                {extra.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
            <button
              className="link-btn"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
            >
              {open
                ? t.experience.showLess
                : t.experience.showMore.replace("{n}", extra.length)}
              <FiChevronDown
                className={`chevron ${open ? "is-flipped" : ""}`}
                aria-hidden="true"
              />
            </button>
          </>
        )}
      </article>
    </li>
  );
}

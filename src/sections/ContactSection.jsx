import { useEffect, useState } from "react";
import { FiCheck, FiCopy, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { trackPointer } from "../utils/pointer";

// El correo va en base64 para evitar scrapers
const getEmail = () => atob("YXJ0dHVyby5hbGFyY29uQGdtYWlsLmNvbQ==");

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/luisarturoalarcon/",
    Icon: FiLinkedin,
  },
  { label: "GitHub", href: "https://github.com/ArtthurAlarcon", Icon: FiGithub },
];

export default function ContactSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(getEmail());
      setCopied(true);
    } catch {
      window.location.href = `mailto:${getEmail()}`;
    }
  };

  return (
    <section id="contact" className="section">
      <Reveal className="card contact-panel spotlight" onPointerMove={trackPointer}>
        <div className="contact-main">
          <span className="section-index">05 · {t.contact.eyebrow}</span>
          <h2 className="contact-title">{t.contact.title}</h2>
          <p className="contact-text">{t.contact.text}</p>

          <div className="contact-actions">
            <a
              href="#"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${getEmail()}`;
              }}
            >
              <FiMail aria-hidden="true" />
              {t.contact.email}
            </a>
            <button
              className={`btn btn-outline ${copied ? "is-success" : ""}`}
              onClick={copyEmail}
            >
              {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
              <span aria-live="polite">{copied ? t.contact.copied : t.contact.copy}</span>
            </button>
          </div>

          <div className="social-row">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                <social.Icon aria-hidden="true" />
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <aside className="contact-side">
          <h3>{t.contact.availableTitle}</h3>
          <ul className="check-list">
            {t.contact.available.map((item) => (
              <li key={item}>
                <FiCheck aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <h3>{t.contact.locationTitle}</h3>
          <p className="muted">{t.contact.location}</p>
          <LocalTime label={t.contact.localTime} />
        </aside>
      </Reveal>
    </section>
  );
}

function LocalTime({ label }) {
  const { lang } = useLanguage();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(timer);
  }, []);

  const time = new Intl.DateTimeFormat(lang === "es" ? "es-MX" : "en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Mexico_City",
  }).format(now);

  return (
    <p className="local-time">
      <span className="status-dot" aria-hidden="true" />
      {label} · {time}
    </p>
  );
}

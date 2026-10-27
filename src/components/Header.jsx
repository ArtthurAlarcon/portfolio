import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useLanguage } from "../i18n/LanguageContext";
import { useScrollSpy } from "../hooks/useScrollSpy";

const SECTIONS = [
  "home",
  "projects",
  "about",
  "skills",
  "experience",
  "contact",
];

export default function Header({ theme, onToggleTheme }) {
  const { t, lang, toggleLang } = useLanguage();
  const { active, scrolled } = useScrollSpy(SECTIONS);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const indicatorRef = useRef(null);

  // Mueve la pastilla del nav bajo el enlace activo
  useLayoutEffect(() => {
    const place = () => {
      const link = navRef.current?.querySelector(`[data-id="${active}"]`);
      const indicator = indicatorRef.current;
      if (!link || !indicator) return;
      indicator.style.width = `${link.offsetWidth}px`;
      indicator.style.transform = `translateX(${link.offsetLeft}px)`;
    };
    place();
    document.fonts?.ready.then(place);
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active, lang]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "is-open" : ""}`}
    >
      <div className="header-inner">
        <a href="#home" className="brand-link" onClick={() => setMenuOpen(false)}>
          <span className="logo">AA</span>
          <span className="brand">Arturo Alarcón</span>
        </a>

        <nav className="nav" ref={navRef} id="main-nav" aria-label={t.nav.aria}>
          <span className="nav-indicator" ref={indicatorRef} aria-hidden="true" />
          {SECTIONS.map((id, idx) => (
            <a
              key={id}
              href={`#${id}`}
              data-id={id}
              className={`nav-link ${active === id ? "is-active" : ""}`}
              aria-current={active === id ? "true" : undefined}
              style={{ "--i": idx }}
              onClick={() => setMenuOpen(false)}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="lang-switch"
            data-lang={lang}
            onClick={toggleLang}
            aria-label={t.toggles.langAria}
            title={t.toggles.langAria}
          >
            <span className="lang-thumb" aria-hidden="true" />
            <span className={lang === "es" ? "is-on" : ""}>ES</span>
            <span className={lang === "en" ? "is-on" : ""}>EN</span>
          </button>

          <button
            className="icon-btn theme-toggle"
            data-theme-state={theme}
            onClick={onToggleTheme}
            aria-label={t.toggles.themeAria}
            title={t.toggles.themeAria}
          >
            <FiSun className="theme-icon theme-icon-sun" aria-hidden="true" />
            <FiMoon className="theme-icon theme-icon-moon" aria-hidden="true" />
          </button>

          <button
            className="icon-btn menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? t.toggles.menuClose : t.toggles.menuOpen}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <span className="scroll-progress" aria-hidden="true" />
    </header>
  );
}

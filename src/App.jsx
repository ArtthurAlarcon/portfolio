import { FiArrowUp } from "react-icons/fi";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactSection from "./sections/ContactSection";
import { useTheme } from "./hooks/useTheme";
import { useLanguage } from "./i18n/LanguageContext";

function App() {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <span className="backdrop-glow backdrop-glow-1" />
        <span className="backdrop-glow backdrop-glow-2" />
        <span className="backdrop-grid" />
      </div>

      <Header theme={theme} onToggleTheme={toggleTheme} />

      <div className="page">
        <main>
          <HeroSection theme={theme} />
          <ProjectsSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Arturo Alarcón</span>
          <span className="footer-made">{t.footer.madeWith}</span>
          <a href="#home" className="link-btn back-to-top">
            {t.footer.backToTop}
            <FiArrowUp aria-hidden="true" />
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;

import SectionHeading from "../components/SectionHeading";
import TechStack from "../components/TechStack";
import { techStack } from "../data/techStack";
import { useLanguage } from "../i18n/LanguageContext";

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section">
      <SectionHeading
        index="03"
        title={t.skills.title}
        subtitle={t.skills.subtitle}
      />
      <TechStack items={techStack} />
    </section>
  );
}

import { experience } from '../data/experience'
import { useLanguage } from '../i18n/LanguageContext'

export default function ExperienceSection() {
  const { lang, t } = useLanguage()

  return (
    <section id="experience" className="section">
      <h2>{t.experience.title}</h2>

      <div className="card-grid exp-grid">
        {experience[lang].map(item => (
          <article key={item.id} className="card">
            <div className="card-body">
              <h3>{item.company} · {item.role}</h3>

              <p className="muted">
                {item.date} · {item.location} · {item.modality}
              </p>

              <ul className="list">
                {item.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

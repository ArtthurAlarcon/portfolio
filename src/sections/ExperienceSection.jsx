import { experience } from '../data/experience'

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <h2>Experiencia</h2>

      <div className="card-grid exp-grid">
        {experience.map(item => (
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

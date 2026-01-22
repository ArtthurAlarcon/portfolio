export default function TechStack({ items = [] }) {
  return (
    <div className="tech-grid">
      {items.map((t) => (
        <div key={t.name} className="tech-item">
          <t.Icon className="tech-icon" aria-hidden="true" />
          <span className="tech-name">{t.name}</span>
        </div>
      ))}
    </div>
  );
}

import Reveal from "./Reveal";

export default function SectionHeading({ index, title, subtitle, children }) {
  return (
    <Reveal className="section-heading">
      <div>
        <span className="section-index">{index}</span>
        <h2>{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {children}
    </Reveal>
  );
}

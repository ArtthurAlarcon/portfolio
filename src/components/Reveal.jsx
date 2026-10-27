import { useInView } from "../hooks/useInView";

// Aparece con un desvanecido hacia arriba al entrar en pantalla
export default function Reveal(props) {
  const { as: Tag = "div", delay = 0, className = "", style, children, ...rest } = props;
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--delay": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

import { useEffect, useState } from "react";

// Devuelve un ref de callback para que el observer siga al elemento aunque se
// vuelva a montar (por ejemplo, la cuadrícula de proyectos al filtrar)
export function useInView({
  once = true,
  rootMargin = "0px 0px -12% 0px",
  threshold = 0.12,
} = {}) {
  const [element, setElement] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [element, once, rootMargin, threshold]);

  return [setElement, inView];
}

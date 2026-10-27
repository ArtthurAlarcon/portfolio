import { useEffect, useState } from "react";

// Sección activa + estado "scrolled" del header. El progreso se escribe como
// variable CSS (--scroll) para no re-renderizar en cada frame.
export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const root = document.documentElement;
      const max = root.scrollHeight - window.innerHeight;
      const y = window.scrollY;

      root.style.setProperty("--scroll", max > 0 ? (y / max).toFixed(4) : 0);
      setScrolled(y > 12);

      // Al llegar al final se marca la última sección aunque no cruce la línea
      if (max - y < 4) {
        setActive(ids[ids.length - 1]);
        return;
      }

      const line = window.innerHeight * 0.4;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return { active, scrolled };
}

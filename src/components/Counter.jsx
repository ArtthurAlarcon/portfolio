import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

const DURATION = 1400;

export default function Counter({ value, suffix = "" }) {
  const [ref, inView] = useInView();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setCurrent(value));
      return () => cancelAnimationFrame(frame);
    }

    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCurrent(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="counter">
      {current}
      {suffix && <span className="counter-suffix">{suffix}</span>}
    </span>
  );
}

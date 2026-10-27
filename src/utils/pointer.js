// Posición del cursor relativa al elemento, para el brillo tipo "spotlight"
export function trackPointer(e) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

// Inclinación 3D suave según la posición del cursor
export function tiltPointer(e) {
  if (e.pointerType !== "mouse") return;
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const px = (e.clientX - rect.left) / rect.width - 0.5;
  const py = (e.clientY - rect.top) / rect.height - 0.5;
  el.style.setProperty("--ry", `${(px * 10).toFixed(2)}deg`);
  el.style.setProperty("--rx", `${(-py * 10).toFixed(2)}deg`);
}

export function resetTilt(e) {
  e.currentTarget.style.setProperty("--rx", "0deg");
  e.currentTarget.style.setProperty("--ry", "0deg");
}

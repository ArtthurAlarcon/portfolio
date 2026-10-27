const MONTHS = {
  ene: 0, jan: 0, feb: 1, mar: 2, abr: 3, apr: 3, may: 4, jun: 5,
  jul: 6, ago: 7, aug: 7, sep: 8, oct: 9, nov: 10, dic: 11, dec: 11,
};

const toMonthIndex = (text) => {
  const [month, year] = text.trim().split(/\s+/);
  const m = MONTHS[month?.slice(0, 3).toLowerCase()];
  return m === undefined || !year ? null : Number(year) * 12 + m;
};

// "Oct 2023 — Oct 2026" -> "3 años"
export function formatDuration(range, units) {
  const [start, end = ""] = range.split(/\s+[—–-]\s+/);
  const from = toMonthIndex(start);
  const now = new Date();
  const to = /actual|present/i.test(end)
    ? now.getFullYear() * 12 + now.getMonth()
    : toMonthIndex(end);
  if (from === null || to === null || to <= from) return "";

  const years = Math.floor((to - from) / 12);
  const months = (to - from) % 12;
  return [
    years && `${years} ${years === 1 ? units.year : units.years}`,
    months && `${months} ${months === 1 ? units.month : units.months}`,
  ]
    .filter(Boolean)
    .join(" ");
}

// Monograma de la empresa: "Ciudad Maderas" -> "CM"
export function companyInitials(company) {
  return company
    .replace(/\(.*?\)|S\.A\..*$/g, "")
    .split(/\s+/)
    .filter((word) => /^[A-ZÁÉÍÓÚÑ]/.test(word))
    .map((word) => word[0])
    .join("")
    .slice(0, 4);
}

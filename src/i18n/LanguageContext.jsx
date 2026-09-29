import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  const saved = localStorage.getItem("lang");
  if (saved === "es" || saved === "en") return saved;
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.title = translations[lang].meta.title;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLang, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  return useContext(LanguageContext);
}

// Devuelve el valor en el idioma actual si es un objeto { es, en }
// eslint-disable-next-line react-refresh/only-export-components
export function localize(value, lang) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[lang] ?? value.es;
  }
  return value;
}

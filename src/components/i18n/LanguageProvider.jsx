import { createContext, useContext, useState, useEffect } from "react";
import { translations, LANGUAGES } from "./translations.js";

const LangContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved && translations[saved]) return saved;
    } catch {}
    return "en";
  });

  useEffect(() => {
    const meta = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const meta = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return (
    <LangContext.Provider
      value={{ lang, setLang, t: translations[lang], dir: meta.dir }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}

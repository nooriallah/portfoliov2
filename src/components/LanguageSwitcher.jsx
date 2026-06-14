import { useState } from "react";
import { Languages, Check, ChevronDown } from "lucide-react";
import { LANGUAGES } from "../i18n/translations.js";
import { useLang } from "../i18n/LanguageProvider.jsx";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-blue-500 transition"
      >
        <Languages size={16} />
        <span>{current.label}</span>
        <ChevronDown size={14} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute end-0 mt-2 w-36 z-50 rounded-lg border border-white/10 bg-slate-900 shadow-xl overflow-hidden">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm transition ${l.code === lang ? "text-blue-400 bg-white/5" : "text-slate-300 hover:bg-white/5"}`}
              >
                <span>{l.label}</span>
                {l.code === lang && <Check size={14} />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_IDS } from "../data/content.js";
import { scrollToId } from "../utils/scroll.js";
import { useLang } from "./i18n/LanguageProvider.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

export default function Navbar({ scrolled, active }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur border-b border-white/5 py-3" : "py-5"}`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2 text-white font-bold text-lg"
        >
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
            N
          </span>
          Nooriallah
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_IDS.map((id) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`px-3 py-2 text-sm rounded-md transition-colors ${active === id ? "text-blue-400" : "text-slate-400 hover:text-white"}`}
            >
              {t.nav[id]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => go("contact")}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition"
          >
            {t.ui.hireMe} <ArrowRight size={16} />
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden text-white p-2"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-slate-950/95 backdrop-blur border-t border-white/5 px-6 py-4 flex flex-col gap-1">
          {NAV_IDS.map((id) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="text-start px-2 py-2 text-slate-300 hover:text-blue-400"
            >
              {t.nav[id]}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

import { socials } from "../data/content.js";
import { useLang } from "./i18n/LanguageProvider.jsx";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {t.hero.name}. {t.footer.rights}
        </p>
        <div className="flex gap-3">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="grid place-items-center w-9 h-9 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-blue-500 transition"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

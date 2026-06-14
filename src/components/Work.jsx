import { ExternalLink } from "lucide-react";
import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { useLang } from "./i18n/LanguageProvider.jsx";

export default function Work() {
  const { t } = useLang();
  return (
    <Section
      id="work"
      eyebrow={t.sections.work.eyebrow}
      title={t.sections.work.title}
      className="bg-white/[0.02]"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        {t.work.map((p, i) => (
          <Reveal key={i} delay={i * 90}>
            <div className="group h-full p-6 rounded-2xl border border-white/10 bg-slate-900/40 hover:border-blue-500/50 hover:bg-slate-900/70 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">
                  {p.tag}
                </span>
                <ExternalLink
                  size={18}
                  className="text-slate-600 group-hover:text-blue-400 transition"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-sm text-slate-500">{t.workNote}</p>
    </Section>
  );
}

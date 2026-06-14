import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { skillsMeta } from "../data/content.js";
import { useLang } from "./i18n/LanguageProvider.jsx";

export default function Skills() {
  const { t } = useLang();
  return (
    <Section
      id="skills"
      eyebrow={t.sections.skills.eyebrow}
      title={t.sections.skills.title}
      className="bg-white/[0.02]"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsMeta.map((s, i) => (
          <Reveal key={s.id} delay={i * 80}>
            <div className="h-full p-6 rounded-2xl border border-white/10 bg-slate-900/40">
              <div className="flex items-center gap-3 mb-4">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400">
                  <s.icon size={20} />
                </span>
                <h3 className="font-bold text-white">{t.skills[s.id]}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="text-sm px-3 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

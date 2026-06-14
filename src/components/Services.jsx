import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { servicesMeta } from "../data/content.js";
import { useLang } from "./i18n/LanguageProvider.jsx";

export default function Services() {
  const { t } = useLang();
  return (
    <Section
      id="services"
      eyebrow={t.sections.services.eyebrow}
      title={t.sections.services.title}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesMeta.map((s, i) => {
          const txt = t.services[s.id];
          return (
            <Reveal key={s.id} delay={i * 80}>
              <div className="group h-full p-6 rounded-2xl border border-white/10 bg-slate-900/40 hover:-translate-y-1 hover:border-blue-500/50 transition-all">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-400 mb-4">
                  <s.icon size={22} />
                </span>
                <h3 className="font-bold text-white mb-2">{txt.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {txt.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

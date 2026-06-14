import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { IMG } from "../data/content.js";
import { useLang } from "./i18n/LanguageProvider.jsx";

export default function About() {
  const { t } = useLang();
  return (
    <Section
      id="about"
      eyebrow={t.sections.about.eyebrow}
      title={t.sections.about.title}
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Reveal className="flex justify-center">
          <img
            src={IMG.about}
            alt=""
            className="rounded-2xl border border-white/10 w-full max-w-sm object-cover"
          />
        </Reveal>
        <Reveal delay={120}>
          <h3 className="text-2xl font-bold text-white mb-4">
            {t.about.heading}
          </h3>
          <p className="text-slate-400 leading-relaxed mb-6">{t.about.text}</p>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
            {t.about.facts.map(([k, v]) => (
              <div key={k}>
                <span className="text-slate-500">{k}</span>
                <p className="text-white font-medium break-words">{v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

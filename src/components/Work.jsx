import { ExternalLink } from "lucide-react";
import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { workMeta } from "../data/content.js";
import { useLang } from "./i18n/LanguageProvider.jsx";

export default function Work() {
  const { t } = useLang();

  return (
    <Section
      id="work"
      eyebrow={t.sections.work.eyebrow}
      title={t.sections.work.title}
      className="bg-section"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        {workMeta.map((m, i) => {
          const p = t.work[i];
          const card = (
            <div className="group h-full p-6 rounded-2xl border border-line bg-surface hover:border-accent/50 hover:bg-surface-strong transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent">
                  {m.tag}
                </span>
                <ExternalLink
                  size={18}
                  className={`transition ${m.link ? "text-faint group-hover:text-accent" : "text-line"}`}
                />
              </div>
              <h3 className="text-lg font-bold text-heading mb-2">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
            </div>
          );

          return (
            <Reveal key={i} delay={i * 90}>
              {m.link ? (
                <a
                  href={m.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full"
                >
                  {card}
                </a>
              ) : (
                card
              )}
            </Reveal>
          );
        })}
      </div>
      <p className="mt-6 text-sm text-faint">{t.workNote}</p>
    </Section>
  );
}

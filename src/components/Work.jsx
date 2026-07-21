import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { projects } from "../data/projects.js";
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => {
          const card = (
            <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface hover:border-accent/50 transition-all">
              {/* number badge (like the old portfolio) */}
              <span className="absolute top-3 start-3 z-10 text-xs font-bold px-2.5 py-1 rounded-full bg-accent text-white shadow">
                {i + 1}
              </span>

              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />

              {/* hover overlay (like the old portfolio) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center bg-accent/90 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                {/* <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/15 text-white">
                  {p.category}
                </span> */}
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                {p.url && (
                  <span className="text-sm text-white/90 underline underline-offset-4">
                    {t.sections.work.visit}
                  </span>
                )}
              </div>
            </div>
          );

          return (
            <Reveal key={p.title} delay={(i % 3) * 90}>
              {p.url ? (
                <a
                  href={p.url}
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
    </Section>
  );
}

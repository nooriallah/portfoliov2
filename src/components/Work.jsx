import { useState } from "react";
import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import Tilt from "./ui/Tilt.jsx";
import Pagination from "./ui/Pagination.jsx";
import { projects } from "../data/projects.js";
import { scrollToId } from "../utils/scroll.js";
import { useLang } from "./i18n/LanguageProvider.jsx";

const PER_PAGE = 9;

export default function Work() {
  const { t } = useLang();
  const [page, setPage] = useState(0);

  const pages = Math.max(1, Math.ceil(projects.length / PER_PAGE));
  // Clamped rather than stored raw, so the section cannot land on an empty
  // page if the project list ever shrinks.
  const current = Math.min(page, pages - 1);
  const start = current * PER_PAGE;
  const visible = projects.slice(start, start + PER_PAGE);

  const goTo = (next) => {
    setPage(next);
    // Three rows tall: without this you land halfway down the new page.
    scrollToId("work");
  };

  return (
    <Section
      id="work"
      eyebrow={t.sections.work.eyebrow}
      title={t.sections.work.title}
      className="bg-section"
      aura="left"
    >
      {/* Keyed by page so the cards remount and play their entrance again —
          a page turn that swaps content silently reads as broken. */}
      <div
        key={current}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {visible.map((p, i) => {
          // Numbering follows the full list, not the page, so a project keeps
          // the same number wherever it appears.
          const number = start + i + 1;

          const card = (
            <Tilt
              className="h-full"
              innerClassName="h-full"
              max={6}
              scale={1.02}
              lift={10}
              perspective={900}
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface [transform-style:preserve-3d] group-hover:border-accent/50 group-focus-visible:border-accent transition-colors">
                {/* number badge */}
                <span
                  className="absolute top-3 start-3 z-20 text-xs font-bold px-2.5 py-1 rounded-full bg-accent text-white shadow-lg"
                  style={{ transform: "translateZ(38px)" }}
                >
                  {number}
                </span>

                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />

                {/* hover overlay */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 p-4 text-center bg-accent/85 backdrop-blur-[2px] opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-focus-visible:opacity-100 group-focus-visible:scale-100 transition-all duration-500 ease-out">
                  <div style={{ transform: "translateZ(26px)" }}>
                    <h3 className="text-lg font-bold text-white">{p.title}</h3>
                    {p.url && (
                      <span className="mt-1 block text-sm text-white/90 underline underline-offset-4">
                        {t.sections.work.visit}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Tilt>
          );

          return (
            <Reveal key={p.title} delay={(i % 3) * 110} from="tilt">
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {card}
                </a>
              ) : (
                <div className="group h-full">{card}</div>
              )}
            </Reveal>
          );
        })}
      </div>

      <Pagination
        className="mt-12"
        page={current}
        pages={pages}
        onChange={goTo}
        label={t.sections.work.title}
        range={[start + 1, start + visible.length, projects.length]}
      />
    </Section>
  );
}

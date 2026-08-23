import { Quote } from "lucide-react";
import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import Tilt from "./ui/Tilt.jsx";
import { reviewMeta } from "../data/content.js";
import { useLang } from "./i18n/LanguageProvider.jsx";

export default function Reviews() {
  const { t } = useLang();

  return (
    <Section
      id="reviews"
      eyebrow={t.sections.reviews.eyebrow}
      title={t.sections.reviews.title}
      className="bg-section"
      aura="right"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {reviewMeta.map((m, i) => {
          const r = t.reviews[i];
          return (
            <Reveal key={i} delay={i * 120} from="tilt">
              <Tilt
                className="group h-full"
                innerClassName="h-full"
                max={4}
                scale={1.012}
                lift={8}
                perspective={1100}
              >
                <div className="h-full p-6 rounded-2xl border border-line bg-surface flex flex-col [transform-style:preserve-3d] group-hover:border-accent/35 transition-colors">
                  <Quote
                    size={28}
                    className="text-accent/40 mb-3 transition-colors duration-300 group-hover:text-accent/70"
                    style={{ transform: "translateZ(20px)" }}
                  />
                  <p className="text-sm text-body leading-relaxed flex-1">
                    {r.text}
                  </p>
                  <div
                    className="flex items-center gap-3 mt-5 pt-5 border-t border-line-soft"
                    style={{ transform: "translateZ(14px)" }}
                  >
                    <img
                      src={m.img}
                      alt={m.name}
                      loading="lazy"
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-heading font-semibold text-sm">
                        {m.name}
                      </p>
                      <p className="text-xs text-faint">{r.role}</p>
                    </div>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

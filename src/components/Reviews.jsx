import { Quote } from "lucide-react";
import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
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
    >
      <div className="grid md:grid-cols-3 gap-6">
        {reviewMeta.map((m, i) => {
          const r = t.reviews[i];
          return (
            <Reveal key={i} delay={i * 100}>
              <div className="h-full p-6 rounded-2xl border border-line bg-surface flex flex-col">
                <Quote size={28} className="text-accent/40 mb-3" />
                <p className="text-sm text-body leading-relaxed flex-1">
                  {r.text}
                </p>
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-line-soft">
                  <img
                    src={m.img}
                    alt={m.name}
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
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

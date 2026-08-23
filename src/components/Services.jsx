import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import Tilt from "./ui/Tilt.jsx";
import { servicesMeta } from "../data/content.js";
import { useLang } from "./i18n/LanguageProvider.jsx";

export default function Services() {
  const { t } = useLang();

  return (
    <Section
      id="services"
      eyebrow={t.sections.services.eyebrow}
      title={t.sections.services.title}
      aura="right"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesMeta.map((s, i) => {
          const txt = t.services[s.id];
          return (
            <Reveal key={s.id} delay={(i % 3) * 100} from="tilt">
              <Tilt
                className="group h-full"
                innerClassName="h-full"
                max={6}
                scale={1.02}
                lift={12}
                perspective={1000}
                sheen
              >
                <div className="h-full p-6 rounded-2xl border border-line bg-surface overflow-hidden [transform-style:preserve-3d] group-hover:border-accent/40 transition-colors">
                  {/* the plate is held forward in Z; the icon inside it is
                      what turns, so the two transforms never fight */}
                  <span
                    className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-accent mb-4"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <s.icon
                      size={22}
                      className="transition-transform duration-500 ease-out group-hover:-rotate-12 group-hover:scale-110"
                    />
                  </span>
                  <h3
                    className="font-bold text-heading mb-2"
                    style={{ transform: "translateZ(18px)" }}
                  >
                    {txt.title}
                  </h3>
                  <p
                    className="text-sm text-muted leading-relaxed"
                    style={{ transform: "translateZ(8px)" }}
                  >
                    {txt.desc}
                  </p>
                </div>
              </Tilt>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

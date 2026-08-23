import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import Tilt from "./ui/Tilt.jsx";
import Stagger from "./ui/Stagger.jsx";
import AboutCanvas from "./three/AboutCanvas.jsx";
import useParallax from "../hooks/useParallax.js";
import { IMG } from "../data/content.js";
import { useLang } from "./i18n/LanguageProvider.jsx";

export default function About() {
  const { t } = useLang();
  // The two columns drift in opposite directions, which is what separates
  // them in depth as you scroll past.
  const media = useParallax(0.17);
  const copy = useParallax(-0.07);

  return (
    <Section
      id="about"
      eyebrow={t.sections.about.eyebrow}
      title={t.sections.about.title}
      aura="right"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div ref={media} className="flex justify-center">
          <Reveal from="scale">
            {/* The 3D presenting scene; the original photo remains the
                fallback for reduced-motion / low-power / no-WebGL visitors. */}
            <AboutCanvas
              fallback={
                <Tilt max={7} scale={1.02} lift={12} perspective={1200}>
                  <div className="relative [transform-style:preserve-3d]">
                    <div
                      className="absolute inset-0 rounded-2xl border border-accent/30"
                      style={{ transform: "translateZ(-22px) scale(1.06)" }}
                    />
                    <img
                      src={IMG.about}
                      alt=""
                      className="relative rounded-2xl border border-line w-full max-w-sm object-cover shadow-xl shadow-black/10"
                    />
                  </div>
                </Tilt>
              }
            />
          </Reveal>
        </div>

        <div ref={copy}>
          <Reveal delay={100}>
            <h3 className="text-2xl font-bold text-heading mb-4">
              {t.about.heading}
            </h3>
            <p className="text-muted leading-relaxed mb-6">{t.about.text}</p>
          </Reveal>
          <Stagger
            step={70}
            start={120}
            className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm"
          >
            {t.about.facts.map(([k, v]) => (
              <div key={k}>
                <span className="text-faint">{k}</span>
                <p className="text-heading font-medium break-words">{v}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}

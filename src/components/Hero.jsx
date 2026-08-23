import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import Reveal from "./ui/Reveal.jsx";
import Tilt from "./ui/Tilt.jsx";
import SplitText from "./ui/SplitText.jsx";
import HeroCanvas from "./three/HeroCanvas.jsx";
import useParallax from "../hooks/useParallax.js";
import { IMG, socials } from "../data/content.js";
import { scrollToId } from "../utils/scroll.js";
import { useLang } from "./i18n/LanguageProvider.jsx";

// Marquee technologies — all taken from the real skills list in data/content.js
const HIGHLIGHTS = ["React.js", "Laravel", "Tailwind CSS"];

export default function Hero() {
  const { t } = useLang();
  const roles = t.roles;
  const [role, setRole] = useState(0);
  const portrait = useParallax(0.1);

  useEffect(() => {
    const timer = setInterval(
      () => setRole((r) => (r + 1) % roles.length),
      2200,
    );
    return () => clearInterval(timer);
  }, [roles]);

  const [pre, post] = t.hero.intro.split("{role}");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-24 pb-20 overflow-hidden"
    >
      <HeroCanvas />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <div>
          <Reveal>
            <p className="text-accent font-medium mb-3">{t.hero.greeting}</p>
          </Reveal>
          <SplitText
            as="h1"
            text={t.hero.name}
            delay={90}
            step={70}
            threshold={0}
            className="text-4xl md:text-6xl font-extrabold text-heading leading-[1.05] tracking-tight"
          />
          <Reveal delay={200}>
            <p className="mt-4 text-xl md:text-2xl font-medium text-body">
              {pre}
              <span
                key={role}
                className="role-swap bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
              >
                {roles[role % roles.length]}
              </span>
              {post}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-5 max-w-md text-muted leading-relaxed">
              {t.hero.tagline}
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={IMG.cv}
                target="_blank"
                rel="noreferrer"
                download="Noorullah_Qayoumi_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 hover:shadow-blue-600/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all"
              >
                <Download size={18} /> {t.ui.downloadCv}
              </a>
              <button
                onClick={() => scrollToId("work")}
                className="inline-flex items-center gap-2 px-5 py-3 font-semibold text-heading rounded-lg border border-line bg-bg/40 backdrop-blur-sm hover:bg-chip hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all"
              >
                {t.ui.viewWork}
              </button>
            </div>
          </Reveal>
          <Reveal delay={500}>
            <div className="mt-8 flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="grid place-items-center w-10 h-10 rounded-lg border border-line bg-bg/40 backdrop-blur-sm text-muted hover:text-heading hover:border-accent hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Portrait — a genuine stack of planes, not a flat card */}
        <div ref={portrait} className="flex justify-center">
          <Reveal delay={300} from="scale">
            <Tilt className="relative" max={9} scale={1.02} lift={16} perspective={1200}>
              <div className="relative [transform-style:preserve-3d]">
                <div
                  className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-blue-500 to-indigo-600 opacity-20 blur-2xl"
                  style={{ transform: "translateZ(-60px)" }}
                />
                <div
                  className="absolute inset-0 rounded-3xl border border-accent/35"
                  style={{ transform: "translateZ(-24px) scale(1.07)" }}
                />
                <img
                  src={IMG.hero}
                  alt={t.hero.name}
                  className="relative w-72 md:w-80 rounded-3xl border border-line object-cover shadow-2xl shadow-black/20"
                />
                {HIGHLIGHTS.map((tech, i) => (
                  <span
                    key={tech}
                    className={`absolute text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border border-line bg-card/85 backdrop-blur-md text-body shadow-lg ${
                      ["-start-5 top-12", "-end-6 top-1/2", "-start-3 bottom-12"][i]
                    }`}
                    style={{ transform: `translateZ(${64 - i * 12}px)` }}
                  >
                    <span className="inline-block w-1.5 h-1.5 me-1.5 rounded-full bg-accent align-middle" />
                    {tech}
                  </span>
                ))}
              </div>
            </Tilt>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollToId("about")}
        aria-label="Scroll to next section"
        className="scroll-cue absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:grid place-items-center w-6 h-10 rounded-full border border-line text-faint hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
      >
        <span className="scroll-cue-dot block w-1 h-1 rounded-full bg-accent" />
      </button>
    </section>
  );
}

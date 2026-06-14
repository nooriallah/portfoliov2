import { useState, useEffect } from "react";
import { Download, ArrowRight } from "lucide-react";
import Reveal from "./ui/Reveal.jsx";
import { IMG, socials } from "../data/content.js";
import { scrollToId } from "../utils/scroll.js";
import { useLang } from "./i18n/LanguageProvider.jsx";

export default function Hero() {
  const { t } = useLang();
  const roles = t.roles;
  const [role, setRole] = useState(0);

  useEffect(() => {
    setRole(0);
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
      className="relative min-h-screen flex items-center px-6 pt-24 overflow-hidden"
    >
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <Reveal>
            <p className="text-accent font-medium mb-3">{t.hero.greeting}</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-heading leading-tight">
              {t.hero.name}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-xl md:text-2xl font-medium text-body">
              {pre}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
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
                className="inline-flex items-center gap-2 px-5 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition"
              >
                <Download size={18} /> {t.ui.downloadCv}
              </a>
              <button
                onClick={() => scrollToId("work")}
                className="inline-flex items-center gap-2 px-5 py-3 font-semibold text-heading rounded-lg border border-line hover:bg-chip transition"
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
                  className="grid place-items-center w-10 h-10 rounded-lg border border-line text-muted hover:text-heading hover:border-accent transition"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={300} className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl blur-2xl opacity-30" />
            <img
              src={IMG.hero}
              alt={t.hero.name}
              className="relative w-72 md:w-80 rounded-3xl border border-line object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

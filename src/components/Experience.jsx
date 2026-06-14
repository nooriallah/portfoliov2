import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { useLang } from "./i18n/LanguageProvider.jsx";

export default function Experience() {
  const { t } = useLang();
  const columns = [
    [t.experience.heading, t.experience.items],
    [t.education.heading, t.education.items],
  ];

  return (
    <Section
      id="experience"
      eyebrow={t.sections.experience.eyebrow}
      title={t.sections.experience.title}
    >
      <div className="grid md:grid-cols-2 gap-12">
        {columns.map(([heading, list]) => (
          <div key={heading}>
            <Reveal>
              <h3 className="text-xl font-bold text-white mb-6">{heading}</h3>
            </Reveal>
            <div className="relative ps-6 border-s border-white/10 space-y-8">
              {list.map((item, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="relative">
                    <span className="absolute -start-[27px] top-1 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />
                    <span className="text-xs font-semibold text-blue-400">
                      {item.year}
                    </span>
                    <h4 className="text-white font-bold mt-1">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.place}</p>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

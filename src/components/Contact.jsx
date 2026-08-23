import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import Stagger from "./ui/Stagger.jsx";
import Tilt from "./ui/Tilt.jsx";
import { IMG } from "../data/content.js";
import { useLang } from "./i18n/LanguageProvider.jsx";

export default function Contact() {
  const { t } = useLang();
  const icons = [Mail, Phone, MapPin];
  const hrefs = [
    "mailto:nooriallah18@gmail.com",
    "https://wa.link/qz0jh5",
    null,
  ];

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-bg border border-line text-heading placeholder-muted focus:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent outline-none transition";

  return (
    <Section
      id="contact"
      eyebrow={t.sections.contact.eyebrow}
      title={t.sections.contact.title}
      aura="left"
    >
      <div className="grid md:grid-cols-2 gap-10">
        <Stagger step={90} className="space-y-4">
          {[
            ...t.contact.items.map((c, i) => {
              const Icon = icons[i];
              return (
                <a
                  key={i}
                  href={hrefs[i] || undefined}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-line bg-surface hover:border-accent/40 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all"
                >
                  <span className="grid place-items-center w-11 h-11 rounded-lg bg-accent/10 text-accent">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs text-faint">{c.label}</p>
                    <p className="text-heading font-medium text-sm break-all">
                      {c.value}
                    </p>
                  </div>
                </a>
              );
            }),
            <div
              key="qr"
              className="flex items-center gap-4 p-4 rounded-xl border border-line bg-surface"
            >
              <img
                src={IMG.qr}
                alt="QR code"
                className="w-16 h-16 rounded-lg bg-white p-1"
              />
              <p className="text-sm text-muted">{t.contact.qrText}</p>
            </div>,
          ]}
        </Stagger>

        <Reveal delay={140} from="tilt">
          <Tilt max={3} scale={1} lift={6} perspective={1400}>
            <div className="p-6 rounded-2xl border border-line bg-surface [transform-style:preserve-3d]">
              <Stagger step={80} start={120} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    placeholder={t.contact.form.name}
                    className={inputClass}
                  />
                  <input
                    placeholder={t.contact.form.email}
                    className={inputClass}
                  />
                </div>
                <input
                  placeholder={t.contact.form.subject}
                  className={inputClass}
                />
                <textarea
                  rows={4}
                  placeholder={t.contact.form.message}
                  className={`${inputClass} resize-none`}
                />
                <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-600/20 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition">
                  {t.contact.form.send} <ArrowRight size={18} />
                </button>
              </Stagger>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </Section>
  );
}

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
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
    "w-full px-4 py-3 rounded-lg bg-bg border border-line text-heading placeholder-muted focus:border-accent outline-none transition";

  return (
    <Section
      id="contact"
      eyebrow={t.sections.contact.eyebrow}
      title={t.sections.contact.title}
    >
      <div className="grid md:grid-cols-2 gap-10">
        <Reveal>
          <div className="space-y-4">
            {t.contact.items.map((c, i) => {
              const Icon = icons[i];
              return (
                <a
                  key={i}
                  href={hrefs[i] || undefined}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-line bg-surface hover:border-accent/40 transition"
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
            })}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-line bg-surface">
              <img
                src={IMG.qr}
                alt="QR code"
                className="w-16 h-16 rounded-lg bg-white p-1"
              />
              <p className="text-sm text-muted">{t.contact.qrText}</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="p-6 rounded-2xl border border-line bg-surface space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder={t.contact.form.name} className={inputClass} />
              <input placeholder={t.contact.form.email} className={inputClass} />
            </div>
            <input placeholder={t.contact.form.subject} className={inputClass} />
            <textarea
              rows={4}
              placeholder={t.contact.form.message}
              className={`${inputClass} resize-none`}
            />
            <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition">
              {t.contact.form.send} <ArrowRight size={18} />
            </button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

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
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-slate-900/40 hover:border-blue-500/40 transition"
                >
                  <span className="grid place-items-center w-11 h-11 rounded-lg bg-blue-500/10 text-blue-400">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs text-slate-500">{c.label}</p>
                    <p className="text-white font-medium text-sm break-all">
                      {c.value}
                    </p>
                  </div>
                </a>
              );
            })}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-slate-900/40">
              <img
                src={IMG.qr}
                alt="QR code"
                className="w-16 h-16 rounded-lg bg-white p-1"
              />
              <p className="text-sm text-slate-400">{t.contact.qrText}</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="p-6 rounded-2xl border border-white/10 bg-slate-900/40 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                placeholder={t.contact.form.name}
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:border-blue-500 outline-none transition"
              />
              <input
                placeholder={t.contact.form.email}
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:border-blue-500 outline-none transition"
              />
            </div>
            <input
              placeholder={t.contact.form.subject}
              className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:border-blue-500 outline-none transition"
            />
            <textarea
              rows={4}
              placeholder={t.contact.form.message}
              className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:border-blue-500 outline-none transition resize-none"
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

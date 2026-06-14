import Reveal from "./Reveal.jsx";

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {eyebrow && (
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">
                {eyebrow}
              </span>
            </div>
          </Reveal>
        )}
        {title && (
          <Reveal delay={80}>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-12">
              {title}
            </h2>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

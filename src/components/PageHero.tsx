import AmbientBlobs from "./AmbientBlobs";
import Reveal from "./motion/Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 pb-20 pt-40">
      <AmbientBlobs />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-serif-display mt-6 text-4xl font-bold leading-tight text-ink-50 sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-200">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

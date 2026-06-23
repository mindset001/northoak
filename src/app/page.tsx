import Link from "next/link";
import { ArrowRight, ClipboardList, HardHat, Landmark, Sprout, Truck } from "lucide-react";
import HeroCanvas from "@/components/3d/HeroCanvas";
import AmbientBlobs from "@/components/AmbientBlobs";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import TiltCard from "@/components/motion/TiltCard";
import Counter from "@/components/motion/Counter";
import {
  about,
  coreServices,
  company,
  mission,
  projects,
  stats,
  vision,
} from "@/lib/content";

const serviceIcons = [HardHat, Truck, ClipboardList, Sprout];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-ink-950">
        <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-850" />
        <HeroCanvas />
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pb-12 pt-28">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                {company.rcNumber} &middot; Est. {company.incorporated}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-serif-display mt-7 text-5xl font-bold leading-[1.05] text-ink-50 sm:text-6xl md:text-7xl">
                Engineering Nigeria&rsquo;s
                <span className="text-gradient-gold"> next chapter</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-200">
                Northoak Global Investment Limited delivers construction, engineering,
                transportation and procurement solutions for government and private
                sector clients across Nigeria and abroad.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-azure-500 to-azure-700 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-azure-900/50 ring-1 ring-white/10 transition-transform hover:scale-105"
                >
                  Start a Conversation
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-ink-100 transition-colors hover:bg-white/5"
                >
                  Explore Services
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="relative z-10">
          <div className="mx-auto max-w-7xl border-t border-white/5 px-6">
            <div className="grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif-display text-2xl font-bold text-gold-300 sm:text-3xl">
                    {stat.display ?? <Counter value={stat.value} suffix={stat.suffix} />}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-ink-200/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="relative overflow-hidden py-28">
        <AmbientBlobs />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              {about.eyebrow}
            </span>
            <h2 className="font-serif-display mt-4 text-3xl font-bold text-ink-50 sm:text-4xl">
              {about.heading}
            </h2>
            <p className="mt-6 leading-relaxed text-ink-200">{about.paragraphs[0]}</p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-azure-300 transition-colors hover:text-azure-200"
            >
              Read our story <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.1}>
              <TiltCard className="glass-panel p-7">
                <h3 className="font-serif-display text-xl font-semibold text-gold-300">Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-200">{mission}</p>
              </TiltCard>
            </Reveal>
            <Reveal delay={0.2}>
              <TiltCard className="glass-panel p-7">
                <h3 className="font-serif-display text-xl font-semibold text-azure-300">Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-200">{vision}</p>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="relative border-y border-white/5 bg-ink-900/40 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              What We Do
            </span>
            <h2 className="font-serif-display mt-4 text-3xl font-bold text-ink-50 sm:text-4xl">
              Core Capabilities
            </h2>
          </Reveal>

          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreServices.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <StaggerItem key={service.title}>
                  <TiltCard className="glass-panel h-full p-7">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-azure-500/20 to-gold-500/10 text-gold-300 ring-1 ring-white/10">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-serif-display mt-5 text-lg font-semibold text-ink-50">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-200">
                      {service.description}
                    </p>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </StaggerGroup>

          <Reveal className="mt-12 text-center" delay={0.1}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-ink-100 transition-colors hover:bg-white/5"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="relative overflow-hidden py-28">
        <AmbientBlobs />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Featured Delivery
            </span>
            <h2 className="font-serif-display mt-4 text-3xl font-bold text-ink-50 sm:text-4xl">
              Trusted with Critical Infrastructure
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="mt-14">
            <TiltCard className="glass-panel mx-auto max-w-3xl p-10">
              <div className="flex items-center gap-3 text-azure-300">
                <Landmark size={22} />
                <span className="text-sm font-semibold uppercase tracking-widest">
                  {projects[0].client}
                </span>
              </div>
              <h3 className="font-serif-display mt-5 text-2xl font-bold text-ink-50 sm:text-3xl">
                {projects[0].title}
              </h3>
              <p className="mt-4 text-sm uppercase tracking-widest text-gold-300">
                {projects[0].category}
              </p>
              <Link
                href="/projects"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-azure-300 transition-colors hover:text-azure-200"
              >
                See more projects <ArrowRight size={16} />
              </Link>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/5 py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-azure-700/30 via-ink-950 to-ink-950" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="font-serif-display text-3xl font-bold text-ink-50 sm:text-4xl">
              Let&rsquo;s build something
              <span className="text-gradient-azure"> lasting</span>, together.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-ink-200">
              Reach out to Northoak Global Investment Limited for your next
              engineering, construction or procurement project.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-4 text-sm font-bold text-ink-950 shadow-xl shadow-gold-900/30 transition-transform hover:scale-105"
            >
              Contact Northoak <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

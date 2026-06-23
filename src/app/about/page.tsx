import type { Metadata } from "next";
import { Compass, ShieldCheck, Target } from "lucide-react";
import PageHero from "@/components/PageHero";
import AmbientBlobs from "@/components/AmbientBlobs";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import TiltCard from "@/components/motion/TiltCard";
import { about, company, mission, philosophy, vision } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Northoak Global Investment Limited (RC 707217), incorporated in 2007 to provide construction, engineering, transportation and procurement services across Nigeria.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "An unparalleled reputation for client service, dedication and integrity of staff guides every engagement.",
  },
  {
    icon: Target,
    title: "Delivery",
    description: "Successful project delivery, on cost and on schedule, from concept through to completion.",
  },
  {
    icon: Compass,
    title: "Leadership",
    description: "Specialists at every stage of design and construction, providing leadership that prevents problems before they start.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Northoak"
        title="A reputation built on delivery"
        description="Incorporated in 2007, Northoak Global Investment Limited has grown into a trusted partner for construction, engineering, transportation and procurement across Nigeria."
      />

      {/* STORY */}
      <section className="relative overflow-hidden py-24">
        <AmbientBlobs />
        <div className="relative mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="glass-panel rounded-3xl p-10">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`leading-relaxed text-ink-200 ${i === 0 ? "font-serif-display text-xl text-ink-50" : "mt-5 text-base"}`}
                >
                  {p}
                </p>
              ))}
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm text-ink-200/80">
                <span>
                  <span className="text-gold-300">RC Number:</span> {company.rcNumber}
                </span>
                <span>
                  <span className="text-gold-300">Incorporated:</span> {company.incorporated}
                </span>
                <span>
                  <span className="text-gold-300">Headquarters:</span> Abuja, Nigeria
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION / VISION / PHILOSOPHY */}
      <section className="relative border-y border-white/5 bg-ink-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <StaggerGroup className="grid gap-6 md:grid-cols-3">
            <StaggerItem>
              <TiltCard className="glass-panel h-full p-8">
                <h3 className="font-serif-display text-xl font-semibold text-gold-300">Our Mission</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-200">{mission}</p>
              </TiltCard>
            </StaggerItem>
            <StaggerItem>
              <TiltCard className="glass-panel h-full p-8">
                <h3 className="font-serif-display text-xl font-semibold text-azure-300">Our Vision</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-200">{vision}</p>
              </TiltCard>
            </StaggerItem>
            <StaggerItem>
              <TiltCard className="glass-panel h-full p-8">
                <h3 className="font-serif-display text-xl font-semibold text-ink-50">Our Approach</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-200">{philosophy}</p>
              </TiltCard>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative overflow-hidden py-24">
        <AmbientBlobs />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              What Drives Us
            </span>
            <h2 className="font-serif-display mt-4 text-3xl font-bold text-ink-50 sm:text-4xl">
              Our Values
            </h2>
          </Reveal>

          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <TiltCard className="glass-panel h-full p-8 text-center">
                  <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-azure-500/20 to-gold-500/10 text-gold-300 ring-1 ring-white/10">
                    <value.icon size={24} />
                  </div>
                  <h3 className="font-serif-display mt-5 text-lg font-semibold text-ink-50">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-200">{value.description}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}

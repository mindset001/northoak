import type { Metadata } from "next";
import { ArrowUpRight, Landmark } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AmbientBlobs from "@/components/AmbientBlobs";
import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";
import { clients, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Northoak Global Investment Limited project delivery for the Central Bank of Nigeria, Kano Branch.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Track Record"
        title="Delivery clients can rely on"
        description="From facilities engineering to nationwide logistics, every Northoak project is run with the same discipline: control costs, hold the schedule, and deliver a high-quality result."
      />

      <section className="relative overflow-hidden py-24">
        <AmbientBlobs />
        <div className="relative mx-auto max-w-5xl px-6">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <TiltCard className="glass-panel p-10 sm:p-12">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-azure-300">
                      <Landmark size={22} />
                      <span className="text-sm font-semibold uppercase tracking-widest">
                        {project.client}
                      </span>
                    </div>
                    <h2 className="font-serif-display mt-5 max-w-xl text-2xl font-bold text-ink-50 sm:text-3xl">
                      {project.title}
                    </h2>
                    <span className="mt-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-300">
                      {project.category}
                    </span>
                  </div>
                  <ArrowUpRight className="hidden shrink-0 text-ink-200/40 sm:block" size={32} />
                </div>
              </TiltCard>
            </Reveal>
          ))}

          <Reveal delay={0.15}>
            <div className="glass-panel mt-8 rounded-2xl p-8 text-center">
              <p className="text-sm leading-relaxed text-ink-200">
                Our project portfolio continues to grow. Get in touch to discuss
                how Northoak can support your next engineering, construction or
                logistics requirement.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-azure-300 transition-colors hover:text-azure-200"
              >
                Start a project with us <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-ink-900/40 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Trusted By
            </span>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              {clients.map((client) => (
                <span
                  key={client}
                  className="glass-panel rounded-xl px-6 py-4 text-sm font-semibold text-ink-100"
                >
                  {client}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import {
  Boxes,
  ClipboardList,
  Droplets,
  HardHat,
  PackageSearch,
  Sprout,
  Truck,
  Wrench,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import AmbientBlobs from "@/components/AmbientBlobs";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import TiltCard from "@/components/motion/TiltCard";
import { coreServices, otherServices, philosophy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Engineering, transportation, procurement, agricultural services, water reticulation, borehole drilling, equipment and general supplies from Northoak Global Investment Limited.",
};

const coreIcons = [HardHat, Truck, ClipboardList, Sprout];
const otherIcons = [Droplets, Wrench, PackageSearch, Boxes];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Solutions built for every stage of your project"
        description={philosophy}
      />

      <section className="relative overflow-hidden py-24">
        <AmbientBlobs />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Core Services
            </span>
          </Reveal>

          <StaggerGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreServices.map((service, i) => {
              const Icon = coreIcons[i];
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
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-ink-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-azure-300">
              Additional Services
            </span>
          </Reveal>

          <StaggerGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((service, i) => {
              const Icon = otherIcons[i];
              return (
                <StaggerItem key={service.title}>
                  <TiltCard className="glass-panel h-full p-7">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ink-600/40 to-azure-500/10 text-azure-300 ring-1 ring-white/10">
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
        </div>
      </section>
    </>
  );
}

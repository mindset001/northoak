import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import AmbientBlobs from "@/components/AmbientBlobs";
import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Northoak Global Investment Limited at No. 8, Kinshasa Street, Wuse Zone 6, Abuja, Nigeria.",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(company.address);

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's talk about your next project"
        description="Reach the Northoak Global Investment Limited team directly — we typically respond within one business day."
      />

      <section className="relative overflow-hidden py-24">
        <AmbientBlobs />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="flex h-full flex-col gap-6">
              <TiltCard className="glass-panel p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-azure-500/15 text-azure-300 ring-1 ring-white/10">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink-50">Head Office</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-200">{company.address}</p>
                  </div>
                </div>
              </TiltCard>

              <TiltCard className="glass-panel p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-azure-500/15 text-azure-300 ring-1 ring-white/10">
                    <Phone size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink-50">Phone</h3>
                    {company.phones.map((phone) => (
                      <p key={phone} className="mt-1 text-sm">
                        <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-ink-200 transition-colors hover:text-azure-300">
                          {phone}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </TiltCard>

              <TiltCard className="glass-panel p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-300 ring-1 ring-white/10">
                    <Mail size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink-50">Email</h3>
                    {company.emails.map((email) => (
                      <p key={email} className="mt-1 text-sm">
                        <a href={`mailto:${email}`} className="text-ink-200 transition-colors hover:text-azure-300">
                          {email}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </TiltCard>

              <div className="glass-panel flex-1 overflow-hidden rounded-2xl">
                <iframe
                  title="Northoak Global Investment Limited location"
                  className="h-full min-h-[220px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${mapQuery}&z=14&output=embed`}
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <TiltCard className="glass-panel h-full p-8 sm:p-10">
              <h2 className="font-serif-display text-2xl font-bold text-ink-50">Send a Message</h2>
              <p className="mt-2 text-sm text-ink-200">
                Fill in the form and your default mail app will open, addressed to
                our team, ready to send.
              </p>
              <ContactForm />
            </TiltCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
